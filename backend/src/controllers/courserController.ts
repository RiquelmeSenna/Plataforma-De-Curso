import { Request, Response } from "express";
import * as courseService from '../services/courseService'
import * as courseValidator from '../validations/courserValidation'
import { findUserByEmail } from "../models/userModel";


export const getAllCourses = async (req: Request, res: Response) => {
    try {
        const courses = await courseService.getallCourses()
        res.status(200).json(courses)
    } catch (error) {
        res.status(500).json({ error: 'Não foi possivel achar cursos' })
    }
}

export const getCourseById = async (req: Request, res: Response) => {
    const safeData = courseValidator.courseIdSchema.safeParse(req.params)

    if (!safeData.success) {
        return res.status(400).json({ error: safeData.error.flatten().fieldErrors })
    }

    try {
        const course = await courseService.getCourseById(parseInt(safeData.data.id))
        res.status(200).json(course)
    } catch (error) {
        res.status(500).json({ error: 'Não foi possivel achar o curso' })
    }

}
export const getCourseByName = async (req: Request, res: Response) => {
    const safeData = courseValidator.courseNameSchema.safeParse(req.query)

    if (!safeData.success) {
        return res.status(400).json({ error: safeData.error.flatten().fieldErrors })
    }

    try {
        const courses = await courseService.getCourseByName(safeData.data.name)
        res.status(200).json(courses)
    } catch (error) {
        res.status(500).json({ error: 'Não foi possivel achar o curso' })
    }
}

export const getReviewsByCourseId = async (req: Request, res: Response) => {
    const safeData = courseValidator.courseIdSchema.safeParse(req.params)

    if (!safeData.success) {
        return res.status(400).json({ error: safeData.error.flatten().fieldErrors })
    }

    try {
        const reviews = await courseService.getReviewsByCourseId(parseInt(safeData.data.id))
        res.status(200).json(reviews)
    } catch (error) {
        res.status(500).json({ error: 'Não foi possivel achar as reviews do curso' })
    }

}

export const getModulesByCourseId = async (req: Request, res: Response) => {
    const safeData = courseValidator.courseIdSchema.safeParse(req.params)

    if (!safeData.success) {
        return res.status(400).json({ error: safeData.error.flatten().fieldErrors })
    }

    try {
        const modules = await courseService.getModulesByCourseId(parseInt(safeData.data.id))
        res.status(200).json(modules)
    } catch (error) {
        res.status(500).json({ error: 'Não foi possivel achar os modulos do curso' })
    }
}
export const getEnrollmentsByCourseId = async (req: Request, res: Response) => {
    const safeData = courseValidator.courseIdSchema.safeParse(req.params)

    if (!safeData.success) {
        return res.status(400).json({ error: safeData.error.flatten().fieldErrors })
    }

    try {
        const enrollments = await courseService.getEnrollmentsByCourseId(parseInt(safeData.data.id))
        res.status(200).json(enrollments)
    } catch (error) {
        res.status(500).json({ error: 'Não foi possivel achar as inscrições do curso' })
    }
}


export const createCourse = async (req: Request, res: Response) => {
    const safeData = courseValidator.newCourseSchema.safeParse(req.body)

    if (!req.body) res.status(400).json({ error: 'Nenhum dado foi enviado' })

    if (!safeData.success) {
        return res.status(400).json({ error: safeData.error.flatten().fieldErrors })
    }

    const user = await findUserByEmail(req.UserEmail as string)

    if (!user) {
        return res.status(400).json({ error: 'Usuario não encontrado' })
    }

    try {
        const newCourse = await courseService.createCourse({
            categoryId: safeData.data.categoryId,
            description: safeData.data.description,
            name: safeData.data.name,
            price: safeData.data.price,
            teacherId: user.id,
        }, user.id)

        res.status(201).json(newCourse)
    } catch (error) {
        res.status(500).json({ error: 'Não foi possivel criar o curso' })
    }
}

export const updateCourse = async (req: Request, res: Response) => {
    const safeDataBody = courseValidator.courseUpdateSchema.safeParse(req.body)
    const safeDataParams = courseValidator.courseIdSchema.safeParse(req.params)

    if (!req.body) return res.status(400).json({ error: 'Nenhum dado foi enviado' })

    if (!safeDataParams.success) return res.status(400).json({ error: safeDataParams.error.flatten().fieldErrors })

    if (!safeDataBody.success) return res.status(400).json({ error: safeDataBody.error.flatten().fieldErrors })

    const user = await findUserByEmail(req.UserEmail as string)

    if (!user) return res.status(400).json({ error: 'Usuario não encontrado' })

    try {
        const updatedCourse = await courseService.updateCourse(parseInt(safeDataParams.data.id), user.id, {
            categoryId: safeDataBody.data.categoryId,
            description: safeDataBody.data.description,
            name: safeDataBody.data.name,
            price: safeDataBody.data.price,
        })

        res.status(200).json(updatedCourse)
    } catch (error) {
        res.status(500).json({ error: 'Não foi possivel atualizar o curso' })
    }

}

export const deleteCourse = async (req: Request, res: Response) => {
    const safeData = courseValidator.courseIdSchema.safeParse(req.params)

    if (!safeData.success) return res.status(400).json({ error: safeData.error.flatten().fieldErrors })

    const user = await findUserByEmail(req.UserEmail as string)

    if (!user) return res.status(400).json({ error: 'Usuario não encontrado' })

    try {
        const deletedCourse = await courseService.deleteCourse(parseInt(safeData.data.id), user.id)
        res.status(200).json({ Deleted: true })
    } catch (error) {
        res.status(500).json({ error: 'Não foi possivel deletar o curso' })
    }
}
