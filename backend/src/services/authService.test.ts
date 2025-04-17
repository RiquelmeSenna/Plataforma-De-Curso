import { describe, test, expect, beforeAll, afterAll } from '@jest/globals';
import { newUser } from '../types/modelsType';
import * as authService from './authService';
import { deleteUserByEmail } from '../models/userModel';


describe('Should test all function in authService', () => {

    const user: newUser = {
        cpf: '12345678901',
        email: 'teste@gmail.com',
        name: 'teste',
        password: 'Teste123!',
        type: 'Student'
    }

    test('Should test create user', async () => {
        const newUser = await authService.signUp(user)

        expect(newUser).toHaveProperty('id')
        expect(newUser.name).toBe('teste')
    })

    test('Should test user login', async () => {
        const userLogged = await authService.signIn(user.email, user.password)

        expect(userLogged).toHaveProperty('id')
        expect(userLogged?.email).toBe(user.email)
    })

    afterAll(async () => {
        await deleteUserByEmail(user.email)
    })


})