import { Card, Form, Input } from '~/common'

export const SignUpForm = () => {
    return (
        <Card title="Sign Up">
            <Form method="POST">
                <Input
                    name="firstName"
                    type="text"
                    label="First Name"
                />
                <Input
                    name="lastName"
                    type="text"
                    label="Last Name"
                />
                <Input
                    name="email"
                    type="text"
                    label="Email"
                />
                <Input
                    name="password"
                    type="password"
                    label="Password"
                />
            </Form>
        </Card>
    )
}
