import { describe, expect, test } from "@jest/globals";
import * as moduleService from './moduleService'
import { Module } from "@prisma/client";


describe('Should test all services from modules Service', () => {
    let newModule: Module

    const email = 'riquelmeteacher@gmail.com'

    test('Should create a new module', async () => {
        newModule = await moduleService.createModule({
            courseId: 63,
            description: 'Modulo teste de javascript',
            name: 'Modulo teste'
        }, email)

        expect(newModule.name).toBe('Modulo teste')
    })

    test("Shouldn't crate a new module user is not teacher", async () => {
        await expect(async () => {
            return moduleService.createModule({
                courseId: 63,
                description: 'Modulo teste de javascript',
                name: 'Modulo teste'
            }, 'adrianosilva@gmail.com')
        }).rejects.toThrow('User is not the teacher of this course')
    })

    test("Shouldn't crate a new module beacause course not exist", async () => {
        await expect(async () => {
            return moduleService.createModule({
                courseId: 633,
                description: 'Modulo teste de javascript',
                name: 'Modulo teste'
            }, email)
        }).rejects.toThrow('Course not found')
    })

    test('Should get module by Id', async () => {
        const module = await moduleService.getModuleById(newModule.id, email)

        expect(module.name).toBe('Modulo teste')
        expect(module.id).toBe(newModule.id)
    })

    test("Shouldn't get module by id because module not exist", async () => {
        await expect(() => {
            return moduleService.getModuleById(999, email)
        }).rejects.toThrow('Module not found')
    })

    test("Shouldn't get module by id because is not teacher ou student this course", async () => {
        await expect(() => {
            return moduleService.getModuleById(newModule.id, 'adrianosilva@gmail.com')
        }).rejects.toThrow('You not available for this course or you not the teacher')
    })

    test("Should update module", async () => {
        const updatedModule = await moduleService.updateModule(email, newModule.id, newModule.description, 'Modulo teste 2')

        expect(updatedModule.name).toBe('Modulo teste 2')
        expect(updatedModule.description).toBe('Modulo teste de javascript')
    })

    test("Shouldn't update module because module not exist", async () => {
        await expect(() => {
            return moduleService.updateModule(email, 999, '', '')
        }).rejects.toThrow('Module not found')
    })

    test("Shouldn't update module because is not teacher", async () => {
        await expect(() => {
            return moduleService.updateModule('adrianosilva@gmail.com', newModule.id, '', '')
        }).rejects.toThrow('User is not the teacher of this course')
    })


    test("Shouldn't delete module because module not exist", async () => {
        await expect(() => {
            return moduleService.deleteModule(email, 999)
        }).rejects.toThrow('Module not found')
    })

    test("Shouldn't delete module because is not teacher", async () => {
        await expect(() => {
            return moduleService.deleteModule('adrianosilva@gmail.com', newModule.id)
        }).rejects.toThrow('User is not the teacher of this course')
    })

    test("Should delete module", async () => {
        const deletedModule = await moduleService.deleteModule(email, newModule.id)

        expect(deletedModule).toBeTruthy()
    })





})