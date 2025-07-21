import { z } from 'zod'

export const UserSignUpSchema = z.object({
    name1: z.string().nonempty('Name 1 required').min(1),
    name2: z.string().optional(),
    email1: z
        .string()
        .nonempty('Email 1 required')
        .email('Invalid email 1 format')
        .refine((val) => /^[\w.+-]+@(?:gmail|outlook)\.com$/.test(val), {
            message: 'Only Gmail, Outlook or company emails allowed'
        }),
    email2: z
        .string()
        .transform((val) => (val === '' ? undefined : val))
        .optional()
        .refine((val) => !val || /^[\w.+-]+@(?:gmail|outlook)\.com$/.test(val), {
            message: 'Only Gmail, Outlook or company emails allowed'
        })
        .refine((val) => !val || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
            message: 'Invalid email 2 format'
        }),
    family: z.string().optional(),
    password: z.string().nonempty('Password required').min(6, 'Must be 6 character long')
})

export type UserSignUpSchema = z.infer<typeof UserSignUpSchema>
