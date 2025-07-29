import { FaBolt } from 'react-icons/fa'

import { Card, Dropdown, Form, Input } from '~/common'
import { BILL_CATEGORY_OPTIONS } from '~/constants'

import styles from './Bill.module.scss'

export const Bill = () => {
    return (
        <main className={styles.main}>
            <Card
                className={styles.billCard}
                title="Bill"
                icon={<FaBolt />}>
                <Form
                    method="post"
                    btnLabel="Submit">
                    <Dropdown
                        name="billType"
                        label="Select Bill Type"
                        options={BILL_CATEGORY_OPTIONS}
                    />
                    <Input
                        label="Amount (Rs)"
                        name="amount"
                        placeholder="Enter amount"
                        type="number"
                    />
                    <Input
                        name="dueDate"
                        label="Due Date (optional)"
                        type="date"
                    />
                </Form>
            </Card>
        </main>
    )
}
