import { Request, Response } from "express";
import bcrypt from "bcrypt";
import prisma from "../../utils/prisma";

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