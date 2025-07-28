import { Link } from '@remix-run/react'
import clsx from 'clsx'

import { EXPENSE_CATEGORIES } from '~/constants'

import styles from './ExpenseDashboard.module.scss'

export const ExpenseDashboard = () => {
    return (
        <section className={clsx(styles.grid)}>
            {EXPENSE_CATEGORIES.map(({ label, path }) => (
                <Link
                    key={path}
                    to={`/expense/${path}`}
                    className={styles.tile}>
                    {label}
                </Link>
            ))}
        </section>
    )
}
