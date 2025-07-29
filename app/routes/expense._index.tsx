import { json, LoaderFunctionArgs } from '@remix-run/node'

import { ExpenseDashboard } from '~/components'
import { requireUserId } from '~/utils/session.server'

export async function loader({ request }: LoaderFunctionArgs) {
    await requireUserId(request)

    return json({ message: 'Welcome to your dashboard' })
}

export default function ExpenseIndexPage() {
    return <ExpenseDashboard />
}
