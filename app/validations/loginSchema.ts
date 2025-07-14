import { string, z } from 'zod'

export const LoginSchema = z.object({
    email: string().nonempty('Email required').email('Invalid email address'),
    password: string().nonempty('Password required').min(6, 'Must be 6 character long')
})

export type LoginSchema = z.infer<typeof LoginSchema>
