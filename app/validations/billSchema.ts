import { z } from 'zod'

export const BillSchema = z.object({
    billType: z.string().nonempty('Bill type is required'),
    amount: z.coerce.number().int().positive({
        message: 'Amount must be a positive number'
    }),
    dueDate: z.string().optional(),
    address: z.string().nonempty('Address is required')
})

export type BillSchema = z.infer<typeof BillSchema>
