import { clsx } from 'clsx'
import { InputHTMLAttributes } from 'react'

import styles from './Input.module.scss'

type Props = {
    label: string
    name: string
    error?: string
    icon?: React.ReactNode
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({ label, name, icon, error, className, ...rest }: Props) => {
    return (
        <div className={clsx(styles.wrapper, className)}>
            <label
                htmlFor={name}
                className={styles.label}>
                {label}
            </label>

            <div className={styles.inputWrapper}>
                {icon && <span className={styles.icon}>{icon}</span>}
                <input
                    id={name}
                    name={name}
                    className={styles.input}
                    {...rest}
                />
            </div>

            {error && <small className={styles.error}>{error}</small>}
        </div>
    )
}
