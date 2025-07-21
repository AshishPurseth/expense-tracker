import { prisma } from '~/utils'
import { UserSignUpSchema } from '~/validations'

export const CreateFamily = async (data: UserSignUpSchema) => {
    return prisma.family.create({
        data: {
            name: data.family || undefined
        }
    })
}
