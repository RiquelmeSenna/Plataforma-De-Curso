import jwt from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'
import { findUserByEmail } from '../models/userModel'
import '../types/requestType'

export const sign = async (email: string) => {
    return jwt.sign(email, process.env.JWT_SECRET as string)
}


export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const header = req.headers['authorization'];

    if (!header) {
        res.status(401).json({ error: 'Mande um header de autorização' });
        return
    }

    const token = header.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { email: string };
        const user = await findUserByEmail(decoded.email);

        if (!user) {
            res.status(404).json({ error: 'Usuário não encontrado' });
            return
        }

        req.UserEmail = decoded.email;
        next();

    } catch (error) {
        res.status(401).json({ error: 'Token inválido ou expirado' });
        return
    }
};

