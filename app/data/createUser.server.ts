import bcrypt from 'bcryptjs'

import { prisma } from '~/utils'
import type { UserSignUpSchema } from '~/validations'

export const CreateUser = async (data: UserSignUpSchema) => {
    const hashPassword = await bcrypt.hash(data.password, 10)
    return prisma.user.create({
        data: {
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            password: hashPassword
        }
    })
}
