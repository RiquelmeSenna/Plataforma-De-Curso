import { describe, expect, test } from "@jest/globals";
import * as videoService from './videoService'
import { Video } from "@prisma/client";


describe("Should test all functions from video Service", () => {
    let newVideo: Video
    const email = 'riquelmeteacher@gmail.com'

    test('Should create a new video', async () => {
        newVideo = await videoService.createVideo(email, {
            description: 'Video teste do modulo de JS',
            duration: 1,
            moduleId: 3,
            name: 'Video teste',
            url: 'https://youtu.be/KJWHpqrcwkA?si=OKIPjrIMYZ2_-1kI'
        })

        expect(newVideo.name).toBe('Video teste')
        expect(newVideo).toHaveProperty('id')
    })

    test("Shouldn't create a new video because module not exist", async () => {
        await expect(() => {
            return videoService.createVideo(email, {
                description: 'Video teste do modulo de JS',
                duration: 1,
                moduleId: 999,
                name: 'Video teste',
                url: 'https://youtu.be/KJWHpqrcwkA?si=OKIPjrIMYZ2_-1kI'
            })
        }).rejects.toThrow('Module not exist')
    })

    test("Shouldn't create a new video because user is not teacher", async () => {
        await expect(() => {
            return videoService.createVideo('adrianosilva@gmail.com', {
                description: 'Video teste do modulo de JS',
                duration: 1,
                moduleId: 3,
                name: 'Video teste',
                url: 'https://youtu.be/KJWHpqrcwkA?si=OKIPjrIMYZ2_-1kI'
            })
        }).rejects.toThrow('User is not teacher this course')
    })

    test('Should get video by Id', async () => {
        const video = await videoService.getVideoById(newVideo.id, email)

        expect(video.name).toBe('Video teste')
    })

    test("Shouldn't get video by Id because video not exist", async () => {
        await expect(() => {
            return videoService.getVideoById(999, email)
        }).rejects.toThrow('Video not exist')
    })

    test("Shouldn't get video by Id because is not teacher and not student", async () => {
        await expect(() => {
            return videoService.getVideoById(newVideo.id, 'emailteste@gmail.com')
        }).rejects.toThrow('You not available for this course or you not the teacher')
    })

    test('Should update video', async () => {
        const updatedVideo = await videoService.updateVideo(newVideo.id, email, {
            name: 'Video teste atualizado'
        })

        expect(updatedVideo.name).toBe('Video teste atualizado')
    })

    test("Shouldn't update video because user is not teacher", async () => {
        await expect(() => {
            return videoService.updateVideo(newVideo.id, 'emailteste@gmail.com', { name: 'Nome teste' })
        }).rejects.toThrow('User is not teacher this course')
    })

    test("Shouldn't delete video because user is not teacher", async () => {
        await expect(() => {
            return videoService.deleteVideo('emailteste@gmail.com', newVideo.id)
        }).rejects.toThrow('User is not teacher this course')
    })
    test('Should delete video', async () => {
        const deletedVideo = await videoService.deleteVideo(email, newVideo.id)

        expect(deletedVideo).toBeTruthy()
    })

})