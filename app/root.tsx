import '~/styles/main.scss'

import type { LinksFunction, LoaderFunctionArgs } from '@remix-run/node'
import { json, Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react'

import { LayoutWrapper } from '~/common'

import { getUserId } from './utils/session.server'

export const links: LinksFunction = () => [{ rel: 'icon', href: '/favicon.png' }]

export const loader = async ({ request }: LoaderFunctionArgs) => {
    try {
        const userId = await getUserId(request) // Try to get user ID from session
        return json({ userId }) // If the user is logged in, return userId
    } catch (error) {
        // Handle the case when the session doesn't exist or is expired (logout case)
        console.error('Error fetching user ID:', error)
        return json({ userId: null }) // Return null if no user session exists
    }
}

export function Layout({ children }: { children: React.ReactNode }) {
    const loaderData = useLoaderData<typeof loader>()
    const userId = loaderData?.userId
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body>
                <LayoutWrapper userId={userId}>{children}</LayoutWrapper>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    )
}

export default function App() {
    return <Outlet />
}
