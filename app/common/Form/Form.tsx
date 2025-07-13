import { Form as RemixForm, useNavigation } from '@remix-run/react'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

import styles from './Form.module.scss'

type Props = {
    method: 'POST' | 'GET'
    children: ReactNode
    className?: string
}

export const Form = ({ children, className, method }: Props) => {
    const navigation = useNavigation()

    const isSubmitting = navigation.state === 'submitting'
    return (
        <RemixForm
            method={method}
            className={clsx(styles.form, className)}>
            {children}
            <div className={styles.actions}>
                <button
                    type="submit"
                    disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </div>
        </RemixForm>
    )
}
