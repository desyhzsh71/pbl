import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from 'crypto';
import prisma from "../utils/prisma";
import { sendPasswordResetEmail } from "../utils/email";

const JWT_SECRET = process.env.JWT_SECRET as string;

// request untuk reqister
export async function register(req: Request, res: Response) {
    const { fullName, email, company, job, country, password } = req.body;
    console.log(req.body);

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = await prisma.user.create({
            data: {
                fullName,
                email,
                company,
                job,
                country,
                password: hashedPassword
            },
        });
        res.json(user);
    } catch (err) {
        res.status(400).json({ message: "User already exists" });
    }
}

// request untuk login
export async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return res.status(404).json({ message: "User not found" });

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) return res.status(401).json({ message: "Invalid credentials" });

        const token = jwt.sign({
            id: user.id,
            fullName: user.fullName,
            email: user.email
        }, JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user.id,
                fullName: user.fullName,
                email: user.email,
                company: user.company,
                job: user.job,
                country: user.country
            }
        });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// profile
export async function profile(req: Request, res: Response) {
    res.json({
        message: "Welcome!", user: (req as any).user
    });
}

// request untuk reset password
export async function forgotPassword(req: Request, res: Response) {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Email is required'
            });
        }

        // Validasi format email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email format',
            });
        }

        // mencari user berdasarkan email
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return res.status(200).json({
                success: true,
                message: 'If the email exists, a reset link has been sent',
            });
        }

        // generate untuk reset token
        const resetToken = crypto.randomBytes(32).toString('hex');
        const hashedToken = crypto
            .createHash('sha256')
            .update(resetToken)
            .digest('hex');

        // hapus token lama yang tidak digunakan untuk user
        await prisma.passwordReset.deleteMany({
            where: {
                userId: user.id,
                used: false,
            },
        });

        // menyimpan token ke database, expirednya 24 jamm
        const expiresAt = new Date();
        expiresAt.setHours(expiresAt.getHours() + 24);

        await prisma.passwordReset.create({
            data: {
                userId: user.id,
                token: hashedToken,
                expiresAt,
            },
        });

        // menampilkan token untuk testing
        console.log('Reset token:', resetToken);
        console.log('Reset link:', `http://localhost:3000/reset-password?token=${resetToken}`);

        // mengirim email
        await sendPasswordResetEmail(user.email, resetToken);

        res.status(200).json({
            success: true,
            message: 'Password reset link has been sent to your email',
            data: {
                email: user.email,
                expiresIn: '24 hours',
                // testing sementara karena belum connect ke frontend
                ...(process.env.NODE_ENV === 'development' && {
                    debug: {
                        token: resetToken,
                        link: `http://localhost:${process.env.PORT || 3000}/reset-password?token=${resetToken}`
                    }
                })
            },
        });
    } catch (error) {
        console.error('Forgot password error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
}

// verifikasi reset token
export async function verifyResetToken(req: Request, res: Response) {
    try {
        const { token } = req.query;

        if (!token || typeof token !== 'string') {
            return res.status(400).json({
                success: false,
                message: 'Invalid token',
            });
        }

        const hashedToken = crypto
            .createHash('sha256')
            .update(token)
            .digest('hex');

        const resetRecord = await prisma.passwordReset.findUnique({
            where: { token: hashedToken },
            include: { user: true },
        });

        if (!resetRecord) {
            return res.status(400).json({
                success: false,
                message: 'Invalid or expired reset token',
            });
        }

        if (resetRecord.used) {
            return res.status(400).json({
                success: false,
                message: 'This reset link has already been used',
            });
        }

        if (new Date() > resetRecord.expiresAt) {
            return res.status(400).json({
                success: false,
                message: 'Reset link has expired',
                expired: true,
            });
        }

        res.status(200).json({
            success: true,
            message: 'Token is valid',
            data: {
                email: resetRecord.user.email,
                fullName: resetRecord.user.fullName,
            },
        });
    } catch (error) {
        console.error('Verify token error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to verify token',
        });
    }
};

// reset password
export async function resetPassword(req: Request, res: Response) {
    try {
        const { token, newPassword, confirmPassword } = req.body;

        if (!token || !newPassword) {
            return res.status(400).json({
                success: false,
                message: 'Token and new password are required',
            });
        }

        // validasi password
        if (newPassword.length < 8) {
            return res.status(400).json({
                success: false,
                message: 'Your password must be at least 8 characters',
            });
        }

        if (newPassword !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: 'Passwords do not match',
            });
        }

        const hashedToken = crypto
            .createHash('sha256')
            .update(token)
            .digest('hex');

        const resetRecord = await prisma.passwordReset.findUnique({
            where: { token: hashedToken },
            include: {
                user: {
                    select: {
                        id: true,
                        email: true,
                        fullName: true,
                    },
                },
            },
        });

        if (!resetRecord) {
            return res.status(400).json({
                success: false,
                message: 'Invalid or expired reset token',
            });
        }

        if (resetRecord.used) {
            return res.status(400).json({
                success: false,
                message: 'This reset link has already been used',
            });
        }

        if (new Date() > resetRecord.expiresAt) {
            return res.status(400).json({
                success: false,
                message: 'Reset link has expired',
            });
        }

        // hash password baru
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        // update password dan mark token sebagai used
        await prisma.$transaction([
            prisma.user.update({
                where: { id: resetRecord.userId },
                data: { password: hashedPassword },
            }),
            prisma.passwordReset.update({
                where: { id: resetRecord.id },
                data: { used: true },
            }),
        ]);

        res.status(200).json({
            success: true,
            message: 'Password has been successfully reset',
            data: {
                email: resetRecord.user.email,
            },
        });
    } catch (error) {
        console.error('Reset password error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to reset password',
        });
    }
};