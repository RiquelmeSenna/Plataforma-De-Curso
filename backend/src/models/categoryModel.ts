import { prisma } from '../database/prisma'
import { CourseCategory } from '../types/modelsType'

export const getCategories = async () => {
    const categories = await prisma.courseCategory.findMany()

    return categories
}

export const getCategoryById = async (id: number) => {
    const category = await prisma.courseCategory.findFirst({ where: { id } })

    return category
}

export const updateCategory = async (id: number, description: string, name: string) => {
    const updatedCategory = await prisma.courseCategory.update({
        where: { id },
        data: {
            description,
            name
        }
    })

    return updatedCategory
}

export const deleteCategory = async (id: number) => {
    const category = await prisma.courseCategory.delete({ where: { id } })

    return category
}

export const newCategory = async (data: CourseCategory) => {
    const category = await prisma.courseCategory.create({ data })

    return category
}

export const getCategoryByName = async (name: string) => {
    const category = await prisma.courseCategory.findMany({
        where: {
            name: {
                contains: name,
                mode: 'insensitive'
            }
        }
    })

    return category
}
