import { CourseCategory, User } from "@prisma/client";
import { createStripeCustomer, createStripePayment } from "./stripe";

export function generateRandomCpf(): string {
    return Math.floor(Math.random() * 1000000000).toString()
}

export function generateEmail(type: string): string {
    return `riquelme${type}${Math.floor(Math.random() * 100)}@gmail.com`
}

export const createAdminUser = async () => {
    const customer = await createStripeCustomer({ email: 'riquelmeadmin@gmail.com', name: 'Riquelme Admin' })

    const adminUser: User = {
        id: Math.floor(Math.random() * 100),
        email: generateEmail('Admin'),
        cpf: generateRandomCpf(),
        name: 'Riquelme Admin',
        password: 'Senhateste123!',
        stripeCustomerId: customer.id,
        type: 'Admin'
    }

    return adminUser
}

export const createTeacherUser = async () => {
    const customer = await createStripeCustomer({ email: 'riquelmeteacher@gmail.com', name: 'Riquelme Teacher' })

    const teacherUser: User = {
        id: Math.floor(Math.random() * 100),
        email: generateEmail('Teacher'),
        cpf: generateRandomCpf(),
        name: 'Riquelme Teacher',
        password: 'Senhateste123!',
        stripeCustomerId: customer.id,
        type: 'Teacher'
    }

    return teacherUser
}

export const createStudentUser = async () => {
    const customer = await createStripeCustomer({ email: 'riquelmesenna577@gmail.com', name: 'Riquelme Senna' })

    const studentUser: User = {
        id: Math.floor(Math.random() * 100),
        email: generateEmail('Student'),
        cpf: generateRandomCpf(),
        name: 'Riquelme Senna',
        password: 'Senhateste123!',
        stripeCustomerId: customer.id,
        type: 'Student'
    }

    return studentUser
}

export const createCategoryTest = async () => {
    const category: CourseCategory = {
        id: Math.floor(Math.random() * 100),
        name: 'Desenvolvimento de Jogos',
        description: 'Categoria de Desenvolvimento de Jogos'
    }

    return category
}


