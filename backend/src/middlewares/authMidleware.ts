import jwt from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'
import { findUserByEmail } from '../models/userModel'


export const sign = async (email: string) => {
    return jwt.sign(email, process.env.JWT_SECRET as string)
}


export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers['authorization']
    if (!header) {
        res.json({ error: 'Mande um header de autorização' })
    } else {
        const token = header?.split(' ')[1]
        const verify = jwt.verify(token as string, process.env.JWT_SECRET as string,
            async (error: any, decoded: any) => {
                if (error) { return res.status(401).json({ error: 'Mande um token válido' }) }

                try {
                    const email = decoded
                    const user = await findUserByEmail(email)
                    if (!user) {
                        res.status(400).json({ error: 'Não existe usuario com este email' })
                    } else {
                        req.UserEmail = email
                        next()
                    }
                } catch (error) {
                    res.status(401).json({ error: 'Token inválido' })
                }

            }
        )
    }
}