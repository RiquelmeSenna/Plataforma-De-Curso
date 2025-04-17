import { Request, RequestHandler, Response } from "express";
import * as categoryService from "../services/categoryService";
import * as categorySchema from '../validations/categoryValidation'
import { findUserByEmail } from "../models/userModel";

export const getCategories = async (req: Request, res: Response) => {
    try {
        const categories = await categoryService.getCategories();
        res.json({ categories })
    } catch (error) {
        res.status(500).json({ message: "Error ao achar as categorias" });
    }
}

export const getCategory = async (req: Request, res: Response) => {
    const safeData = categorySchema.getByIdSchema.safeParse(req.params)

    try {
        if (safeData.success) {
            const category = await categoryService.getCategoryById(parseInt(safeData.data.id))
            res.json({ category })
        } else {
            res.status(400).json({ error: safeData.error.flatten().fieldErrors })
        }
    } catch (error) {
        res.status(500).json({ message: "Error ao achar a categoria" });
    }
}

export const updateCategory = async (req: Request, res: Response) => {
    const safeData = categorySchema.getByIdSchema.safeParse(req.params)
    const safeDataBody = categorySchema.updateCategorySchema.safeParse(req.body)
    const user = await findUserByEmail(req.UserEmail as string)
    try {
        if (safeData.success && safeDataBody.success && user) {
            const updatedCategory = await categoryService.updateCategory(user.email, parseInt(safeData.data.id),
                safeDataBody.data.description as string, safeDataBody.data.name as string)
            res.status(200).json({ updatedCategory })
        } else {
            res.status(400).json({ error: safeData.error?.flatten().fieldErrors })
        }
    } catch (error) {
        res.status(500).json({ message: "Error de atualizar a categoria" });
    }
}

export const deleteCategory = async (req: Request, res: Response) => {
    const safeData = categorySchema.getByIdSchema.safeParse(req.params)
    const user = await findUserByEmail(req.UserEmail as string)
    try {
        if (safeData.success && user) {
            const deletedCategory = await categoryService.deleteCategory(user.email, parseInt(safeData.data.id))
            res.status(200).json({ deletedCategory })
        } else {
            res.status(400).json({ error: safeData.error?.flatten().fieldErrors })
        }

    } catch (error) {
        res.status(500).json({ message: "Error ao deletar a categoria" });
    }
}

export const createCategory = async (req: Request, res: Response) => {
    const safeData = categorySchema.createCategorySchema.safeParse(req.body)
    const user = await findUserByEmail(req.UserEmail as string)
    try {
        if (safeData.success && user) {
            const newCategory = await categoryService.newCategory(user?.email, {
                description: safeData.data.description,
                name: safeData.data.name
            })
            res.status(201).json({ newCategory })
        } else {
            res.status(400).json({ error: safeData.error?.flatten().fieldErrors })
        }
    } catch (error) {
        res.status(500).json({ message: "Error de criar a categoria" });
    }
}

export const getCategoryByName = async (req: Request, res: Response) => {
    const safeData = categorySchema.getCategoryByNameSchema.safeParse(req.query)

    try {
        if (safeData.success) {
            const categories = await categoryService.getCategoryByName(safeData.data.name)
            res.json({ categories })
        } else {
            res.status(400).json({ error: safeData.error.flatten().fieldErrors })
        }
    } catch (error) {
        res.status(500).json({ message: "Error ao achar a categoria" });
    }
}

