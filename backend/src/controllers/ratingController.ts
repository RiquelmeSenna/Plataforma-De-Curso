import { Request, Response } from "express";
import * as ratingService from '../services/ratingService'
import * as ratingValidation from '../validations/ratingValidation'

export const createRating = async (req: Request, res: Response) => {
    const safeData = ratingValidation.ratingCreateSchema.safeParse(req.body)

    if (!req.body) {
        return res.status(400).json({ error: 'Mande o corpo' })
    }

    if (!safeData.success) {
        return res.status(400).json({ error: safeData.error.flatten().fieldErrors })
    }

    try {
        const newRating = await ratingService.createRating(req.UserEmail as string, safeData.data.rating, safeData.data.courseId, safeData.data.comment)

        res.status(201).json({ newRating })
    } catch (error) {
        res.status(500).json({ error: 'Não foi possivel criar o rating' })
    }
}

export const updateRating = async (req: Request, res: Response) => {
    const safeData = ratingValidation.ratingUpdateSchema.safeParse(req.body)
    const safeDataParams = ratingValidation.ratingIdSchema.safeParse(req.params)

    if (!safeData.success) {
        return res.status(400).json({ error: safeData.error.flatten().fieldErrors })
    }

    if (!safeDataParams.success) {
        return res.status(400).json({ error: safeDataParams.error.flatten().fieldErrors })
    }


    if (!req.body) {
        return res.status(400).json({ error: 'Mande o corpo' })
    }

    try {
        const updatedRating = await ratingService.updateRating(req.UserEmail as string, parseInt(safeDataParams.data.id), {
            comment: safeData.data.comment,
            rating: safeData.data.rating
        })

        res.status(200).json({ updatedRating })
    } catch (error) {
        res.status(500).json({ error: 'Não foi possivel atualizar o rating' })
    }
}

export const deleteRating = async (req: Request, res: Response) => {
    const safeData = ratingValidation.ratingIdSchema.safeParse(req.params)

    if (!safeData.success) {
        return res.status(400).json({ error: safeData.error.flatten().fieldErrors })
    }

    try {
        const deletedRating = await ratingService.deleteRating(req.UserEmail as string, parseInt(safeData.data.id))

        res.status(200).json({ deleted: true })
    } catch (error) {

        res.status(500).json({ error: 'Não foi possivel deletar o rating' })
    }

}