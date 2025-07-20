import { string, z } from 'zod'

export const LoginSchema = z.object({
    email: string()
        .nonempty('Email required')
        .email('Invalid email format')
        .refine((val) => /^[\w.+-]+@(?:gmail|outlook|mycompany)\.com$/.test(val), {
            message: 'Only Gmail, Outlook or company emails allowed'
        }),
    password: string().nonempty('Password required').min(6, 'Must be 6 character long')
})

export type LoginSchema = z.infer<typeof LoginSchema>
