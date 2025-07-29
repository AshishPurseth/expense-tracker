import { z } from 'zod'

export const BillSchema = z.object({
    billType: z.string().nonempty('Bill type is required'),
    amount: z.coerce.number().int().positive({
        message: 'Amount must be a positive number'
    }),
    dueDate: z.coerce.date().optional()
})

export type BillSchema = z.infer<typeof BillSchema>
