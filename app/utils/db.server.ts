import { PrismaClient } from '@prisma/client'

declare global {
    // eslint-disable-next-line no-var
    var __db: PrismaClient | undefined
}

const prisma = process.env.NODE_ENV === 'production' ? new PrismaClient() : (global.__db ??= new PrismaClient())

if (process.env.NODE_ENV !== 'production') global.__db = prisma

export { prisma }
