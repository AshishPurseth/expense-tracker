import { Card, Form, Input } from '~/common'

type Props = {
    actionData?: {
        errors?: {
            firstName?: string[]
            lastName?: string[]
            email?: string[]
            password?: string[]
        }
    }
}
export const SignUpForm = ({ actionData }: Props) => {
    console.log(actionData)
    return (
        <Card title="Sign Up">
            <Form
                method="POST"
                btnLabel="Submit">
                <Input
                    name="firstName"
                    type="text"
                    label="First Name"
                    error={actionData?.errors?.firstName?.[0]}
                />
                <Input
                    name="lastName"
                    type="text"
                    label="Last Name"
                    error={actionData?.errors?.lastName?.[0]}
                />
                <Input
                    name="email"
                    type="text"
                    label="Email"
                    error={actionData?.errors?.email?.[0]}
                />
                <Input
                    name="password"
                    type="password"
                    label="Password"
                    error={actionData?.errors?.password?.[0]}
                />
            </Form>
        </Card>
    )
}
