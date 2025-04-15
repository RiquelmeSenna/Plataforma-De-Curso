import { signinSchema, singUpSchema } from "../validations/authValidation"
import { RequestHandler } from 'express'
import * as authService from '../services/authService'


export const signUp: RequestHandler = async (req, res) => {
    const safeData = singUpSchema.safeParse(req.body)

    if (!safeData.success) {
        return res.status(401).json({ error: safeData.error.flatten().fieldErrors })
    }

    try {
        const newUser = await authService.signUp({
            cpf: safeData.data?.cpf,
            email: safeData.data.email,
            name: safeData.data.name,
            password: safeData.data.password,
            type: safeData.data.type
        })

        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({ error: 'Aconteceu algum error!' })
    }
}

export const signin: RequestHandler = async (req, res) => {
    const safeData = signinSchema.safeParse(req.body)

    if (!safeData.success) {
        return res.status(401).json({ error: safeData.error.flatten().fieldErrors })
    }

    try {
        const user = await authService.signIn(safeData.data.email, safeData.data.password)

        res.json(user)
    } catch (error) {
        res.status(400).json({ error: 'Email ou senha incorreto!' })
    }
}