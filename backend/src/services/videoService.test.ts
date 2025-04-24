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

    test('Should get video by Id', async () => {
        const video = await videoService.getVideoById(newVideo.id, email)

        expect(video.name).toBe('Video teste')
    })

    test('Should update video', async () => {
        const updatedVideo = await videoService.updateVideo(newVideo.id, email, {
            name: 'Video teste atualizado'
        })

        expect(updatedVideo.name).toBe('Video teste atualizado')
    })

    test('Should delete video', async () => {
        const deletedVideo = await videoService.deleteVideo(email, newVideo.id)

        expect(deletedVideo).toBeTruthy()
    })
})