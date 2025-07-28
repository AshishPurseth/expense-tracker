import { clsx } from 'clsx'
import { SelectHTMLAttributes } from 'react'

import styles from './Dropdown.module.scss'

type Option = {
    label: string
    value: string
}

type Props = {
    label: string
    name: string
    options: Option[]
    error?: string
} & SelectHTMLAttributes<HTMLSelectElement>

export const Dropdown = ({ label, name, options, error, className, ...rest }: Props) => {
    return (
        <div className={clsx(styles.wrapper, className)}>
            <label
                htmlFor={name}
                className={styles.label}>
                {label}
            </label>

            <div className={styles.inputWrapper}>
                <select
                    id={name}
                    name={name}
                    className={styles.select}
                    {...rest}>
                    <option
                        value=""
                        disabled
                        hidden>
                        -- Select --
                    </option>
                    {options.map((opt) => (
                        <option
                            key={opt.value}
                            value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            </div>

            {error && <small className={styles.error}>{error}</small>}
        </div>
    )
}
