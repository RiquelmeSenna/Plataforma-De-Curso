import jwt from 'jsonwebtoken'
import { NextFunction, Response } from 'express'
import { ExtendedRequest } from '../types/requestType'
import { findUser } from '../models/userModel'


export const sign = async (email: string) => {
    return jwt.sign(email, process.env.JWT_SECRET as string)
}


export const authMiddleware = async (req: ExtendedRequest, res: Response, next: NextFunction) => {
    const header = req.headers['authorization']
    if (!header) {
        return res.json({ error: 'Mande um header de autorização' })
    }

    const token = header.split(' ')[1]
    const verify = jwt.verify(token, process.env.JWT_SECRET as string,
        async (error: any, decoded: any) => {
            if (error) { return res.status(401).json({ error: 'Mande um token válido' }) }

            try {
                const email = decoded
                const user = await findUser(email)
                if (!user) {
                    return res.status(400).json({ error: 'Não existe usuario com este email' })
                }

                req.UserEmail = email
                next()
            } catch (error) {
                res.status(401).json({ error: 'Token inválido' })
            }

        }
    )
}