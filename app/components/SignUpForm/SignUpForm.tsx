import { Card, Form, Input } from '~/common'

export const SignUpForm = () => {
    return (
        <Card title="Sign Up">
            <Form method="POST">
                <Input
                    name="firstName"
                    type="text"
                    label="firstName"
                />
                <Input
                    name="lastName"
                    type="text"
                    label="lastName"
                />
                <Input
                    name="email"
                    type="text"
                    label="email"
                />
                <Input
                    name="password"
                    type="password"
                    label="password"
                />
            </Form>
        </Card>
    )
}
