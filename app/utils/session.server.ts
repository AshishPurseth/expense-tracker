// 1️⃣ Import session functions
import { createCookieSessionStorage, redirect } from '@remix-run/node'

// 2️⃣ Create the cookie storage
const sessionStorage = createCookieSessionStorage({
    cookie: {
        name: '_session', // cookie name seen in browser
        secure: process.env.NODE_ENV === 'production',
        secrets: ['super-secret-key'], // used to encrypt cookie
        sameSite: 'lax',
        path: '/',
        httpOnly: true // JavaScript can't read this — secure
    }
})

// 3️⃣ This gets the session from the request (like reading hotel guest info)
export async function getUserSession(request: Request) {
    return sessionStorage.getSession(request.headers.get('Cookie'))
}

// 4️⃣ This reads the user ID from session (like getting guest ID from keycard)
export async function getUserId(request: Request) {
    const session = await getUserSession(request)
    const userId = session.get('userId')
    return userId
}

// 5️⃣ This protects a page (like checking room key at hotel door)
export async function requireUserId(request: Request, redirectTo = new URL(request.url).pathname) {
    const userId = await getUserId(request)
    if (!userId) {
        const searchParams = new URLSearchParams([['redirectTo', redirectTo]])
        throw redirect(`/login?${searchParams}`)
    }
    return userId
}

// 6️⃣ This creates the session when user logs in (like check-in + giving key)
export async function createUserSession(userId: number, redirectTo: string) {
    const session = await sessionStorage.getSession()
    session.set('userId', userId)

    return redirect(redirectTo, {
        headers: {
            'Set-Cookie': await sessionStorage.commitSession(session)
        }
    })
}

// 7️⃣ This logs out the user (like check-out — destroys session key)
export async function logout(request: Request) {
    const session = await getUserSession(request)
    return redirect('/login', {
        headers: {
            'Set-Cookie': await sessionStorage.destroySession(session)
        }
    })
}
