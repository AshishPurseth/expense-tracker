import { LoaderFunctionArgs } from '@remix-run/node'
import { json, Outlet } from '@remix-run/react'

import { requireUserId } from '~/utils/session.server'

export async function loader({ request }: LoaderFunctionArgs) {
    await requireUserId(request)

    return json({ message: 'Welcome to your dashboard' })
}

export default function ExpenseLayout() {
    return <Outlet />
}
