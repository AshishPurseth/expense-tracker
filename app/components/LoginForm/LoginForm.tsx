import { Card, Form, Input } from '~/common'

export const LoginForm = () => {
    return (
        <Card>
            <Form method="POST">
                <Input
                    name="email"
                    type="text"
                    label="Email"
                />
                <Input
                    name="password"
                    type="text"
                    label="Password"
                />
            </Form>
        </Card>
    )
}
