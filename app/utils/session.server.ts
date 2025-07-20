import { createCookieSessionStorage, redirect } from '@remix-run/node'

const sessionStorage = createCookieSessionStorage({
    cookie: {
        name: '_session',
        secure: process.env.NODE_ENV === 'production',
        secrets: [process.env.SESSION_SECRET!],
        sameSite: 'lax',
        path: '/',
        httpOnly: true
    }
})

export async function getUserSession(request: Request) {
    return sessionStorage.getSession(request.headers.get('Cookie'))
}

export async function getUserId(request: Request) {
    const session = await getUserSession(request)
    const userId = session.get('userId')
    return userId
}

export async function requireUserId(request: Request, redirectTo = new URL(request.url).pathname) {
    const userId = await getUserId(request)
    if (!userId) {
        const searchParams = new URLSearchParams([['redirectTo', redirectTo]])
        throw redirect(`/login?${searchParams}`)
    }
    return userId
}

export async function createUserSession(userId: number, redirectTo: string) {
    const session = await sessionStorage.getSession()
    session.set('userId', userId)

    return redirect(redirectTo, {
        headers: {
            'Set-Cookie': await sessionStorage.commitSession(session)
        }
    })
}

export async function logout(request: Request) {
    const session = await getUserSession(request)
    return redirect('/login', {
        headers: {
            'Set-Cookie': await sessionStorage.destroySession(session)
        }
    })
}
