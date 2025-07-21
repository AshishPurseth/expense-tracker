import { ActionFunctionArgs, json, redirect } from '@remix-run/node'
import { useActionData } from '@remix-run/react'

import { SignUpForm } from '~/components'
import { CreateFamily } from '~/data/createFamily.server'
import { CreateUser } from '~/data/createUser.server'
import { UserSignUpSchema } from '~/validations'

type ActionErrors = {
    errors?: {
        name?: string[]
        family?: string[]
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

    const family = await CreateFamily(result.data)

    await CreateUser(
        {
            name: result.data.name1,
            email: result.data.email1,
            password: result.data.password
        },
        family
    )

    if (result.data.email2 && result.data.name2) {
        await CreateUser(
            {
                name: result.data.name2,
                email: result.data.email2,
                password: result.data.password
            },
            family
        )
    }

    return redirect('/')
}

export default function SignUp() {
    const actionData = useActionData<ActionErrors>()

    return <SignUpForm actionData={actionData} />
}
