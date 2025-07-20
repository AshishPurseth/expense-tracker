import { z } from 'zod'

export const UserSignUpSchema = z.object({
    firstName: z.string().nonempty('First name required').min(1),
    lastName: z.string().nonempty('Last name required').min(1),
    email: z
        .string()
        .nonempty('Email required')
        .email('Invalid email format')
        .refine((val) => /^[\w.+-]+@(?:gmail|outlook|mycompany)\.com$/.test(val), {
            message: 'Only Gmail, Outlook or company emails allowed'
        }),
    password: z.string().nonempty('Password required').min(6, 'Must be 6 character long')
})

export type UserSignUpSchema = z.infer<typeof UserSignUpSchema>
