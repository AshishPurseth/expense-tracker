import { useFetcher } from '@remix-run/react'
import { clsx } from 'clsx'
import { ReactNode, useRef } from 'react'

import styles from './Form.module.scss'

type Props = {
    method: 'post' | 'get'
    children: ReactNode
    className?: string
    btnLabel?: string
    action?: string
}

export const Form = ({ children, className, method, action, btnLabel }: Props) => {
    const fetcher = useFetcher()
    const formRef = useRef<HTMLFormElement>(null)

    const isSubmitting = fetcher.state === 'submitting'

    function onClickSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        const form = formRef.current!

        fetcher.submit(form, { method, action })
        form.reset()
    }

    return (
        <fetcher.Form
            ref={formRef}
            method={method}
            action={action}
            className={clsx(styles.form, className)}>
            {children}
            {btnLabel && (
                <div className={styles.actions}>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        onClick={onClickSubmit}>
                        {isSubmitting ? 'Submitting…' : btnLabel}
                    </button>
                </div>
            )}
        </fetcher.Form>
    )
}
