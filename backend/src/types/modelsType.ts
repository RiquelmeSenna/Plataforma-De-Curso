export type newUser = {
    name: string,
    email: string,
    cpf: string,
    password: string,
    type: 'Student' | 'Teacher' | 'Admin'
}

export type CourseCategory = {
    name: string,
    description: string
}