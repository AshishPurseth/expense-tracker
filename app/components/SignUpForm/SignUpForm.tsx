import { Card, Form, Input } from '~/common'

import styles from './SignUpForm.module.scss'

type Props = {
    actionData?: {
        errors?: {
            name1?: string[]
            name2?: string[]
            email1?: string[]
            email2?: string[]
            family?: string[]
            password?: string[]
        }
    }
}
export const SignUpForm = ({ actionData }: Props) => {
    return (
        <Card title="Family Sign Up (Only 2 Members Allowed)">
            <Form
                method="post"
                btnLabel="Submit">
                <article className={styles.divider}>
                    <Input
                        name="name1"
                        type="text"
                        label="Name 1"
                        placeholder="Enter Full Name 1"
                        error={actionData?.errors?.name1?.[0]}
                    />
                    <Input
                        name="name2"
                        type="text"
                        label="Name 2 (optional)"
                        placeholder="Enter Full Name 2"
                        error={actionData?.errors?.name2?.[0]}
                    />
                </article>
                <article className={styles.divider}>
                    <Input
                        name="email1"
                        type="text"
                        label="Email 1 "
                        placeholder="Enter Email 1"
                        error={actionData?.errors?.email1?.[0]}
                    />
                    <Input
                        name="email2"
                        type="text"
                        label="Email 2 (optional)"
                        placeholder="Enter Email 2"
                        error={actionData?.errors?.email2?.[0]}
                    />
                </article>
                <article className={styles.divider}>
                    <Input
                        name="family"
                        type="text"
                        label="Family Name (optional)"
                        placeholder="Family Name"
                        error={actionData?.errors?.family?.[0]}
                    />
                    <Input
                        name="password"
                        type="password"
                        label="Shared Password"
                        error={actionData?.errors?.password?.[0]}
                    />
                </article>
            </Form>
        </Card>
    )
}
