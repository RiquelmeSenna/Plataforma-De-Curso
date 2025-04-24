import { Request, Response } from 'express'
import * as userService from '../services/userService'
import * as userValidation from '../validations/userValidation'


export const getMe = async (req: Request, res: Response) => {
    try {
        const user = await userService.findUserLogged(req.UserEmail as string)

        res.status(200).json({ user })
    } catch (error) {
        res.status(500).json({ error: 'Não foi possivel acessar o perfil' })
    }
}

export const getUserById = async (req: Request, res: Response) => {
    const safeData = userValidation.userIdSchema.safeParse(req.params)

    if (!safeData.success) {
        return res.status(400).json({ error: safeData.error.flatten().fieldErrors })
    }

    try {
        const user = await userService.findUserById(parseInt(safeData.data.id))

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error: 'Não foi possivel acessar o usuario' })
    }
}

export const updateUser = async (req: Request, res: Response) => {
    const safeData = userValidation.updateUserSchema.safeParse(req.body)

    if (!safeData.success) {
        return res.status(400).json({ erro: safeData.error.flatten().fieldErrors })
    }

    try {
        const updatedUser = await userService.updateUser(req.UserEmail as string, {
            email: safeData.data.email,
            name: safeData.data.name,
            password: safeData.data.password
        })

        res.status(200).json({ user: updatedUser })
    } catch (error) {
        res.status(500).json({ error: 'Não foi possivel atualizar o usuario' })
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const deletedUser = await userService.deleteUser(req.UserEmail as string)

        res.status(200).json({ deleted: true })
    } catch (error) {
        res.status(500).json({ error: 'Não foi possivel deletar o usuario' })
    }
}