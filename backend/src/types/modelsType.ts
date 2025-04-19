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

export type updateCourseType = {
    name?: string,
    description?: string,
    categoryId?: number,
    price?: number,
}

export type CourseType = {
    name: string,
    price: number,
    description: string,
    categoryId: number,
    teacherId: number,
}

export type ModuleType = {
    name: string,
    description: string,
    courseId: number,
}

export type updateModuleType = {
    name?: string,
    description?: string,
    courseId?: number,
}