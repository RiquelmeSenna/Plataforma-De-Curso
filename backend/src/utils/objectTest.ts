import { CourseCategory, User } from "@prisma/client";
import { createStripeCustomer } from "./stripe";



export const createAdminUser = async () => {
    const customer = await createStripeCustomer({ email: 'riquelmeadmin@gmail.com', name: 'Riquelme Admin' })

    const adminUser: User = {
        id: Math.floor(Math.random() * 100),
        email: 'riquelmeadmin@gmail.com',
        cpf: '06955734112',
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
        email: 'riquelmeteacher@gmail.com',
        cpf: '06955734114',
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
        email: 'riquelmesenna577@gmail.com',
        cpf: '06955734113',
        name: 'Riquelme Senna',
        password: 'Senhateste123!',
        stripeCustomerId: customer.id,
        type: 'Student'
    }

    return studentUser
}

export const createCategoryTest = async () => {
    const category: CourseCategory = {
        id: Date.now(),
        name: 'Desenvolvimento Web',
        description: 'Categoria de Desenvolvimento Web'
    }

    return category
}

