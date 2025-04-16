import { RequestHandler, Response } from "express";
import { ExtendedRequest } from "../types/requestType";
import * as categoryService from "../services/categoryService";
import * as categorySchema from '../validations/categoryValidation'
import { findUserByEmail } from "../models/userModel";

export const getCategories: RequestHandler = async (req, res) => {
    try {
        const categories = await categoryService.getCategories();
        res.json({ categories })
    } catch (error) {
        res.status(500).json({ message: "Error ao achar as categorias" });
    }
}

export const getCategory: RequestHandler = async (req, res) => {
    const safeData = categorySchema.getByIdSchema.safeParse(req.params)

    if (!safeData.success) {
        return res.status(400).json({ message: safeData.error.flatten().fieldErrors })
    }

    try {
        const category = await categoryService.getCategoryById(parseInt(safeData.data.id))

        res.json({ category })
    } catch (error) {
        res.status(500).json({ message: "Error ao achar a categoria" });
    }
}

export const updateCategory = async (req: ExtendedRequest, res: Response) => {
    const safeData = categorySchema.getByIdSchema.safeParse(req.params)

    if (!safeData.success) {
        return res.status(400).json({ message: safeData.error.flatten().fieldErrors })
    }

    const safeDataBody = categorySchema.updateCategorySchema.safeParse(req.body)

    if (!safeDataBody.success) {
        return res.status(400).json({ message: safeDataBody.error.flatten().fieldErrors })
    }

    const user = await findUserByEmail(req.UserEmail)

    if (!user) {
        return res.status(400).json({ message: "Usuario não encontrado!" })
    }
    try {
        const updatedCategory = await categoryService.updateCategory(user.email, parseInt(safeData.data.id),
            safeDataBody.data.description as string, safeDataBody.data.name as string)

        res.status(200).json({ updatedCategory })
    } catch (error) {
        res.status(500).json({ message: "Error de atualizar a categoria" });
    }
}

export const deleteCategory = async (req: ExtendedRequest, res: Response) => {
    const safeData = categorySchema.getByIdSchema.safeParse(req.params)

    if (!safeData.success) {
        return res.status(400).json({ message: safeData.error.flatten().fieldErrors })
    }

    const user = await findUserByEmail(req.UserEmail)

    if (!user) {
        return res.status(400).json({ message: "Usuario não encontrado!" })
    }

    try {
        const deletedCategory = await categoryService.deleteCategory(user.email, parseInt(safeData.data.id))

        res.status(200).json({ deletedCategory })
    } catch (error) {
        res.status(500).json({ message: "Error ao deletar a categoria" });
    }
}

export const createCategory = async (req: ExtendedRequest, res: Response) => {
    const safeData = categorySchema.createCategorySchema.safeParse(req.body)

    if (!safeData.success) {
        return res.status(400).json({ message: safeData.error.flatten().fieldErrors })
    }

    const user = await findUserByEmail(req.UserEmail)

    if (!user) {
        return res.status(400).json({ message: "Usuario não encontrado!" })
    }
    try {
        const newCategory = await categoryService.newCategory(user?.email, {
            description: safeData.data.description,
            name: safeData.data.name
        })

        res.status(201).json({ newCategory })
    } catch (error) {
        res.status(500).json({ message: "Error de criar a categoria" });
    }
}

export const getCategoryByName: RequestHandler = async (req, res) => {
    const safeData = categorySchema.getCategoryByNameSchema.safeParse(req.query)

    if (!safeData.success) {
        return res.status(400).json({ message: safeData.error.flatten().fieldErrors })
    }

    try {
        const categories = await categoryService.getCategoryByName(safeData.data.name)
        res.json({ categories })
    } catch (error) {
        res.status(500).json({ message: "Error ao achar a categoria" });
    }
}

