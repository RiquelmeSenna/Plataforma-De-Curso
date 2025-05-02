import { describe, test, expect } from '@jest/globals'
import { Course, CourseCategory, User } from '@prisma/client'
import { prisma } from '../database/prisma'
import { createCategoryTest, createTeacherUser } from '../utils/objectTest'
import * as courseService from './courseService'
import { createStripePayment } from '../utils/stripe'


describe("Should test all functions on course service", () => {
    let courseCategory: CourseCategory
    let teacherUser: User
    let newCourse: Course

    beforeAll(async () => {
        courseCategory = await prisma.courseCategory.create({ data: await createCategoryTest() })
        teacherUser = await prisma.user.create({ data: await createTeacherUser() })
    })

    test("Should create a new Course", async () => {
        const stripePayment = await createStripePayment('Curso NodeJS', 250)

        newCourse = await courseService.createCourse({
            categoryId: courseCategory.id,
            description: 'Curso de nodejs nivel basico/avaçado, para você novo e experiente programador',
            name: 'Curso NodeJS',
            price: 250,
            stripeProductId: stripePayment.id,
            teacherId: teacherUser.id
        }, teacherUser.email)

        expect(newCourse.name).toBe('Curso NodeJS')
        expect(newCourse.stripeProductId).toBe(stripePayment.id)
    })

    test("Should get all courses", async () => {
        const courses = await courseService.getAllCourses()

        expect(courses.length).toBeGreaterThanOrEqual(1)
    })

    test("Should get course By Id", async () => {
        const course = await courseService.getCourseById(newCourse.id)

        expect(course.name).toBe("Curso NodeJS")
    })

    test("Should get courses by name", async () => {
        const courses = await courseService.getCourseByName('NODE') // test insensitive mode

        expect(courses.length).toBeGreaterThanOrEqual(1)
        expect(courses[0].name).toBe('Curso NodeJS')
    })

    test("Should update course by Id", async () => {
        const updatedCourse = await courseService.updateCourse(newCourse.id, teacherUser.id, {
            price: 210
        })

        expect(updatedCourse.price).toBe(210)
    })

    test("Should delete course by ID", async () => {
        const deletedCourse = await courseService.deleteCourse(newCourse.id, teacherUser.id)

        expect(deletedCourse).toBeTruthy()
    })

    afterAll(async () => {
        await prisma.user.delete({ where: { id: teacherUser.id } })
        await prisma.courseCategory.delete({ where: { id: courseCategory.id } })
    })
})