import { prisma } from '~/utils'
import type { UserSignUpSchema } from '~/validations'

export const CreateUser = async (data: UserSignUpSchema) => {
    return prisma.user.create({
        data: {
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            password: data.password
        }
    })
}
