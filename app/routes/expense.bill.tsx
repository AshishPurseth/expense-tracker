import { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node'
import { json, redirect, useLoaderData } from '@remix-run/react'

import { Bill } from '~/components'
import { createBill } from '~/data/createBill.server'
import { prisma } from '~/utils'
import { getUserSession } from '~/utils/session.server'
import { BillSchema } from '~/validations'

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const session = await getUserSession(request)
    const createdBy = session.get('email') || 'unknown-user'

    const bills = await prisma.bill.findMany({
        where: { createdBy: createdBy },
        orderBy: { createdAt: 'desc' }
    })

    console.log(bills)

    return json({ bills })
}

export const action = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData()

    const raw = Object.fromEntries(formData)

    const result = BillSchema.safeParse(raw)

    if (!result.success) {
        const errors = result.error.flatten().fieldErrors
        return json({ errors })
    }

    const session = await getUserSession(request)
    const createdBy = session.get('email') || 'unknown-user'
    const family = session.get('familyId') || 'unknown-family'

    await createBill({
        billName: result.data.billType,
        billAmount: result.data.amount,
        dueDate: result.data.dueDate?.toString() ?? '',
        address: result.data.address,
        family,
        createdBy
    })

    return redirect('/expense/bill')
}

export default function ExpenseBill() {
    const { bills } = useLoaderData<typeof loader>()
    return <Bill bills={bills} />
}
