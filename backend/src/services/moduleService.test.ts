import { describe, expect, test } from "@jest/globals";
import * as moduleService from './moduleService'
import { Module } from "@prisma/client";


describe('Should test all services from modules Service', () => {
    let newVideo: Module

    const email = 'riquelmeteacher@gmail.com'

    test('Should create a new module', async () => {
        newVideo = await moduleService.createModule({
            courseId: 63,
            description: 'Modulo teste de javascript',
            name: 'Modulo teste'
        }, email)

        expect(newVideo.name).toBe('Modulo teste')
    })

    test('Should get module by Id', async () => {
        const module = await moduleService.getModuleById(newVideo.id, email)

        expect(module.name).toBe('Modulo teste')
        expect(module.id).toBe(newVideo.id)
    })

    test("Should update module", async () => {
        const updatedModule = await moduleService.updateModule(email, newVideo.id, newVideo.description, 'Modulo teste 2')

        expect(updatedModule.name).toBe('Modulo teste 2')
        expect(updatedModule.description).toBe('Modulo teste de javascript')
    })

    test("Should delete module", async () => {
        const deletedModule = await moduleService.deleteModule(email, newVideo.id)

        expect(deletedModule).toBeTruthy()
    })



})