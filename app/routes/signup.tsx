import { ActionFunctionArgs, json, redirect } from '@remix-run/node'
import { useActionData } from '@remix-run/react'

import { SignUpForm } from '~/components'
import { CreateUser } from '~/data/createUser.server'
import { UserSignUpSchema } from '~/validations'

type ActionErrors = {
    errors?: {
        firstName?: string[]
        lastName?: string[]
        email?: string[]
        password?: string[]
    }
}

export const action = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData()

    const raw = Object.fromEntries(formData)

    const result = UserSignUpSchema.safeParse(raw)

    if (!result.success) {
        const errors = result.error.flatten().fieldErrors
        return json({ errors })
    }

    await CreateUser(result.data)

    return redirect('/')
}

export default function SignUp() {
    const actionData = useActionData<ActionErrors>()

    return <SignUpForm actionData={actionData} />
}
