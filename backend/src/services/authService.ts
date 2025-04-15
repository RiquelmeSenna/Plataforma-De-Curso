import { User } from '@prisma/client'
import * as authModel from '../models/authModel'
import { findUser } from '../models/userModel'
import bcrypt from 'bcrypt'
import { newUser } from '../types/userType'

export const signUp = async (data: newUser) => {
    const hasUser = await findUser(data.email)

    if (hasUser) {
        throw new Error('User has exist')
    }

    const passwordHash = await bcrypt.hash(data.password, 10)

    const newUser = await authModel.signUp({
        cpf: data.cpf,
        email: data.email,
        name: data.name,
        password: passwordHash,
        type: data.type
    })

    return newUser
}

export const signIn = async (email: string, password) => {
    const user = await findUser(email)

    if (!user) {
        throw new Error('Email not exist')
    }
    const userLogged = await authModel.signIn(user.email, user.password)

    const passwordHash = await bcrypt.compare(password, user.password)

    if (!passwordHash) {
        console.log('Wrong password')
        throw new Error('Wrong password')
    }

    //const token = sign(email)

    return userLogged
}