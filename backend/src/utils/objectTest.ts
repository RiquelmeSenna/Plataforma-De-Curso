import { User } from "@prisma/client";
import { createStripeCustomer } from "./stripe";



export const createAdminUser = async () => {
    const customer = await createStripeCustomer({ email: 'riquelmeadmin@gmail.com', name: 'Riquelme Admin' })

    const adminUser: User = {
        id: 1,
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
        id: 2,
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
        id: 3,
        email: 'riquelmesenna577@gmail.com',
        cpf: '06955734113',
        name: 'Riquelme Senna',
        password: 'Senhateste123!',
        stripeCustomerId: customer.id,
        type: 'Student'
    }

    return studentUser
}

