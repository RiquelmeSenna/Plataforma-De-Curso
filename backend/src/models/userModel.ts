import { prisma } from "../database/prisma";

export const findUserByEmail = async (email: string) => {
    const user = await prisma.user.findFirst({ where: { email } })

    return user
}

export const deleteUserByEmail = async (email: string) => {
    const user = await prisma.user.delete({ where: { email } })

    return user
}