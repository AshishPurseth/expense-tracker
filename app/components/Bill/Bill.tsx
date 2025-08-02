import type { Bill as BillModel } from '@prisma/client'
import { FaBolt } from 'react-icons/fa'

import { Card, Dropdown, Form, Input } from '~/common'
import { BILL_CATEGORY_OPTIONS } from '~/constants'

import styles from './Bill.module.scss'

type Props = {
    bills: BillModel[]
}

export const Bill = ({ bills }: Props) => {
    return (
        <main className={styles.main}>
            <Card
                className={styles.billCard}
                title="Bill"
                icon={<FaBolt />}>
                <Form
                    method="post"
                    action="/expense/bill"
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
                    <Input
                        name="address"
                        label="Address or Location"
                        placeholder="Enter Address"
                        type="text"
                    />
                </Form>
            </Card>

            <section className={styles.listSection}>
                <h2>Your Bills</h2>
                {bills.length === 0 ? (
                    <p>No bills recorded yet.</p>
                ) : (
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Amount</th>
                                <th>Due Date</th>
                                <th>Address</th>
                                <th>Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bills.map((b) => (
                                <tr key={b.id}>
                                    <td>{b.billName}</td>
                                    <td>₹{b.billAmount.toFixed(2)}</td>
                                    <td>{b.dueDate || '—'}</td>
                                    <td>{b.address || '—'}</td>
                                    <td>{new Date(b.createdAt).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </section>
        </main>
    )
}
