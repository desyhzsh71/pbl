/// <reference path="../types/express.d.ts" />

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

interface JwtPayload {
  id: number;
  fullName: string;
  email: string;
}

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "Unauthorized" });

    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ message: "Invalid Token" });
    }
}

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Access token required'
      });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({
          success: false,
          message: 'Invalid or expired token'
        });
      }

      req.user = decoded as JwtPayload;
      next();
    });

  } catch (error) {
    console.error('Auth error:', error);
    res.status(500).json({
      success: false,
      message: 'Authentication failed'
    });
  }
}