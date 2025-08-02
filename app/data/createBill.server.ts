import { prisma } from '~/utils'

type BillInput = {
    billName: string
    billAmount: number
    dueDate?: string
    address?: string
    family: string
    createdBy: string
}

export async function createBill(data: BillInput) {
    return await prisma.bill.create({
        data: {
            billName: data.billName,
            billAmount: data.billAmount,
            address: data.address,
            family: data.family,
            createdBy: data.createdBy,
            ...(data.dueDate && { dueDate: data.dueDate.toString() })
        }
    })
}
