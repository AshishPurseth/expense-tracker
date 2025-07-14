import '~/styles/main.scss'

import type { LinksFunction, LoaderFunctionArgs } from '@remix-run/node'
import { json, Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react'

import { LayoutWrapper } from '~/common'

import { getUserId } from './utils/session.server'

export const links: LinksFunction = () => [
    { rel: 'icon', href: '/favicon.png' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous'
    },
    {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'
    }
]

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const userId = await getUserId(request)
    return json({ userId })
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
