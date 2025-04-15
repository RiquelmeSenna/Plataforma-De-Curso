import { prisma } from "../database/prisma";

export const findUser = async (email: string) => {
    const user = await prisma.user.findFirst({ where: { email } })

    return user
}