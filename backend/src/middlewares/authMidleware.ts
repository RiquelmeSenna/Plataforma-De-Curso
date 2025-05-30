import jwt from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'
import { findUserByEmail } from '../models/userModel'
import '../types/requestType'

export const sign = async (email: string) => {
    return jwt.sign(email, process.env.JWT_SECRET as string)
}


export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers['authorization']
    if (!header) {
        return res.json({ error: 'Mande um header de autorização' })
    }

    const token = header.split(' ')[1]
    const verify = jwt.verify(token, process.env.JWT_SECRET as string,
        async (error: any, decoded: any) => {
            if (error) return res.status(401).json({ error: 'Mande um token válido' })
            try {
                const email = decoded
                const user = await findUserByEmail(email)
                if (!user) {
                    return res.status(400).json({ error: 'Usuario não encontrado' })
                }
                req.UserEmail = user.email
                next()
            } catch (error) {
                res.status(401).json({ error: 'Token inválido' })
            }
        }
    )
}

