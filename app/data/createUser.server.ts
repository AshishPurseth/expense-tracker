import type { Family } from '@prisma/client'
import bcrypt from 'bcryptjs'

import { prisma } from '~/utils'

type SimpleUserData = {
    name: string
    email: string
    password: string
}

export const CreateUser = async (data: SimpleUserData, family: Family) => {
    const hashPassword = await bcrypt.hash(data.password, 10)

    return prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            password: hashPassword,
            family: {
                connect: { id: family.id }
            }
        }
    })
}
