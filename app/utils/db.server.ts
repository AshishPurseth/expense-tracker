import pkg from '@prisma/client'

const { PrismaClient } = pkg
type PrismaClientType = typeof PrismaClient

declare global {
    // eslint-disable-next-line no-var
    var __db: InstanceType<PrismaClientType> | undefined
}

const prisma = process.env.NODE_ENV === 'production' ? new PrismaClient() : (global.__db ?? new PrismaClient())

if (process.env.NODE_ENV !== 'production') global.__db = prisma

export { prisma }
