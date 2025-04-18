import { describe, expect, test } from "@jest/globals";
import * as courseService from "./courseService";
import * as courseModel from '../models/coursesModel'
import { Course } from "@prisma/client";

describe('Should test all functions from courseService', () => {
    let courseTest: Course
    beforeAll(async () => {
        courseTest = await courseModel.createCourse({
            categoryId: 1,
            description: "Descrição de um curso teste",
            name: "Curso teste",
            price: 100,
            teacherId: 30
        })
    }
    )

    test('Should get all courses', async () => {
        const courses = await courseService.getallCourses()

        expect(courses.length).toBeGreaterThanOrEqual(1)
    })

    test('Should get a course by id', async () => {
        const course = await courseService.getCourseById(courseTest.id)

        expect(course.name).toBe(courseTest.name)
        expect(course.id).toBe(courseTest.id)
    })

    test("Shouldn't get a course by id", async () => {
        await expect(() => {
            return courseService.getCourseById(9999)
        }).rejects.toThrow('Course not found')
    })

    test('Should get courses by name', async () => {
        const course = await courseService.getCourseByName('CURSO TESTE')

        expect(course.length).toBeGreaterThanOrEqual(1)
    })

    test("Shouldn't get coursers by name", async () => {
        await expect(() => {
            return courseService.getCourseByName('Curso teste 9999')
        }).rejects.toThrow('Courses not found')
    })

    let newCourse: Course
    test('Should create a course', async () => {
        newCourse = await courseService.createCourse({
            categoryId: 1,
            description: "Descrição de um curso teste2",
            name: "Curso teste2",
            price: 100,
            teacherId: 30
        }, 30)

        expect(newCourse.name).toBe('Curso teste2')
        expect(newCourse.description).toBe('Descrição de um curso teste2')
    })

    test("Shouldn't create a course because user is not a Teacher", async () => {
        await expect(() => {
            return courseService.createCourse({
                categoryId: 1,
                description: "Descrição de um curso teste2",
                name: "Curso teste2",
                price: 100,
                teacherId: 1
            }, 1)
        }).rejects.toThrow('You are not authorized to create this course')
    })

    test('Should update a course', async () => {
        const course = await courseService.updateCourse(newCourse.id, newCourse.teacherId, {
            price: 200
        })

        expect(course.price).toBe(200)
    })

    test("Shouldn't update a course because user is not a Teacher", async () => {
        await expect(() => {
            return courseService.updateCourse(newCourse.id, 1, {
                price: 200
            })
        }).rejects.toThrow("You are not authorized to update this course")
    })

    test('Should delete a course', async () => {
        const deletedCourse = await courseService.deleteCourse(newCourse.id, newCourse.teacherId)

        expect(deletedCourse).toBe(true)
    })

    test("Shouldn't delete a course because user is not a Teacher", async () => {
        await expect(() => {
            return courseService.deleteCourse(newCourse.id, 1)
        }).rejects.toThrow('You are not authorized to delete this course')
    })


    afterAll(async () => {
        await courseModel.deleteCourse(courseTest.id)
    })

})