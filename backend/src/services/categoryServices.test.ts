import { describe, test, expect, beforeAll, afterAll } from '@jest/globals';
import * as categoryService from './categoryService';
import { CourseCategory } from '@prisma/client';

describe('Should test all function in categoryService', () => {
    const userEmail = 'riquelmeadmin@gmail.com'


    test('Should test get all categories', async () => {
        const categories = await categoryService.getCategories()

        expect(categories.length).toBeGreaterThanOrEqual(1)
    })

    test('Should test get category by id', async () => {
        const category = await categoryService.getCategoryById(1)

        expect(category.name).toBe('Desenvolvimento Web')
    })

    test('Sould test get category by id not exist', async () => {
        await expect(
            categoryService.getCategoryById(91091)
        ).rejects.toThrow('Category not exist')

    })

    test('Should test update category', async () => {
        const updatedCategory = await categoryService.updateCategory(userEmail, 1, 'Desenvolvimento Web e Mobile', 'Desenvolvimento Web')

        expect(updatedCategory).toHaveProperty('id')
        expect(updatedCategory.name).toBe('Desenvolvimento Web')
        expect(updatedCategory.description).toBe('Desenvolvimento Web e Mobile')
    })

    test("Shouldn't update category if user is not admin ", async () => {
        await expect(
            categoryService.updateCategory('emailfalso@gmail.com', 1, 'Desenvolvimento Web e Mobile', 'Desenvolvimento Web')
        ).rejects.toThrow('User not authorized')
    })

    test("Shouldn't update category if category not exist", async () => {
        await expect(
            categoryService.updateCategory(userEmail, 91091, 'Desenvolvimento Web e Mobile', 'Desenvolvimento Web')
        ).rejects.toThrow('Category not exist')
    })

    let newCategory: CourseCategory
    test('Should create a new category', async () => {
        newCategory = await categoryService.newCategory(userEmail, {
            description: 'Desenvolvimento de Jogos para Web e Mobile',
            name: 'Desenvolvimento de Jogos'
        })

        expect(newCategory).toHaveProperty('id')
        expect(newCategory.name).toBe('Desenvolvimento de Jogos')
        expect(newCategory.description).toBe('Desenvolvimento de Jogos para Web e Mobile')
    })

    test("Shouldn't create a new category if user is not admin ", async () => {
        await expect(
            categoryService.newCategory('emailfalso@gmail.com', {
                description: 'Desenvolvimento de Jogos para Web e Mobile',
                name: 'Desenvolvimento de Jogos'
            })
        ).rejects.toThrow('User not authorized')
    })

    test('Should test delete category', async () => {
        const deletedCategory = await categoryService.deleteCategory(userEmail, newCategory.id)

        expect(deletedCategory).toBe(true)
    })

    test("Shouldn't delete category if user is not admin ", async () => {
        await expect(
            categoryService.deleteCategory('emailfalso@gmail.com', 1)
        ).rejects.toThrow('User not authorized')
    })

    test("Shouldn't delete category if category not exist", async () => {
        await expect(
            categoryService.deleteCategory(userEmail, 91091)
        ).rejects.toThrow('Category not exist')
    })

    test("Should test get categories by name", async () => {
        const categories = await categoryService.getCategoryByName('Desenvolvimento')

        expect(categories.length).toBeGreaterThanOrEqual(1)
        expect(categories[0].name).toBe('Desenvolvimento Web')
    })

    test("Shouldn't get categories by name if category not exist", async () => {
        await expect(
            categoryService.getCategoryByName('Desenvolvimento de Jogos para Web e Mobile')
        ).rejects.toThrow('Categories not exist')
    })

})
