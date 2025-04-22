import { prisma } from "../database/prisma";

export const getEnrollment = async (studentId: number) => {
    const enrollment = await prisma.enrollment.findFirst({
        where: { studentId }

    })

    return enrollment
}