import { Card, Dropdown, Form, Input } from '~/common'
import { BILL_CATEGORY_OPTIONS } from '~/constants'

export const Bill = () => {
    return (
        <Card>
            <Form
                method={'post'}
                btnLabel="Submit">
                <Dropdown
                    name="bill"
                    label="Select Bill Type"
                    options={BILL_CATEGORY_OPTIONS}
                />
                <Input
                    label="Amount"
                    name="amount"
                    placeholder="Enter amount"
                />
            </Form>
        </Card>
    )
}
