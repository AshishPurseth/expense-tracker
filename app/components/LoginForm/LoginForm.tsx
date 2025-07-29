import { Card, Form, Input } from '~/common'

import styles from './LoginForm.module.scss'

type Props = {
    actionData?: {
        errors?: {
            email?: string[]
            password?: string[]
        }
    }
}

export const LoginForm = ({ actionData }: Props) => {
    return (
        <Card
            title="Sign In"
            className={styles.loginCard}>
            <Form
                method="post"
                btnLabel="Login">
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
