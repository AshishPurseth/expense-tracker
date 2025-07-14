import { ActionFunctionArgs, json } from '@remix-run/node'
import { useActionData } from '@remix-run/react'
import bcrypt from 'bcryptjs'

import { LoginForm } from '~/components'
import { prisma } from '~/utils'
import { createUserSession } from '~/utils/session.server'
import { LoginSchema } from '~/validations'

type ActionErrors = {
    errors?: {
        email?: string[]
        password?: string[]
    }
}

export const action = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData()
    const raw = Object.fromEntries(formData)

    const result = LoginSchema.safeParse(raw)

    if (!result.success) {
        const errors = result.error.flatten().fieldErrors
        return json({ errors })
    }

    const { email, password } = result.data

    const existingUser = await prisma.user.findUnique({ where: { email } })

    if (!existingUser) {
        return json({ errors: { email: ['Invalid email'] } })
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)

    if (!isPasswordCorrect) {
        return json({ error: { email: ['Invalid password'] } })
    }

    console.log('existingUser', existingUser)

    return createUserSession(existingUser.id, '/')
}

export default function Login() {
    const actionData = useActionData<ActionErrors>()
    return <LoginForm actionData={actionData} />
}
