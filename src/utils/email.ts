import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});

// ini untuk user yang lupa password, jadi nanti dia dapat email
export async function sendPasswordResetEmail(
    email: string,
    resetToken: string
) {
    const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'dev';

    // ini untuk url frontend
    const resetURL = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/reset-password?token=${resetToken}`;

    // skip email sending untuk testing
    if (isDevelopment) {
        console.log('=== Email ===');
        console.log('To:', email);
        console.log('Reset URL:', resetURL);
        console.log('Reset token:', resetToken);
        return { success: true };
    }

    // ini baru untuk kirim email beneran
    const mailOptions = {
        from: process.env.SMTP_FROM || '"Nama Aplikasi nantinya" <noreply@appname.com>',
        to: email,
        subject: "Password Reset Request",
        html: `
            <h1>Reset Your Password</h1>
            <p>You are receiving this email because you (or someone else) have requested a password reset for your account.</p>
            <p>Please click on the following link, or paste this into your browser to complete the process:</p>
            <a href="${resetURL}">${resetURL}</a>
            <p>This link will expire in 24 hours.</p>
            <p>If you didn't request this, please ignore this email and your password will remain unchanged.</p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully to:', email);
        return { success: true };
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send reset email');
    }
}