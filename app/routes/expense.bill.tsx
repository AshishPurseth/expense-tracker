import { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node'
import { json, redirect } from '@remix-run/react'

import { Bill } from '~/components'
import { requireUserId } from '~/utils/session.server'
import { BillSchema } from '~/validations'

export async function loader({ request }: LoaderFunctionArgs) {
    await requireUserId(request)

    return json({ message: 'Welcome to your dashboard' })
}

export const action = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData()

    const raw = Object.fromEntries(formData)

    const result = BillSchema.safeParse(raw)

    if (!result.success) {
        const errors = result.error.flatten().fieldErrors
        return json({ errors })
    }

    console.log(result.data)

    return redirect('/expense/bill')
}

export default function ExpenseBill() {
    return <Bill />
}
