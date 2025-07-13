import { clsx } from 'clsx'
import { ReactNode } from 'react'
import { FaUserShield } from 'react-icons/fa'

import styles from './Card.module.scss'

type Props = {
    title?: string
    children: ReactNode
}

export const Card = ({ children, title }: Props) => {
    return (
        <section className={clsx(styles.card)}>
            {title && (
                <div className={clsx(styles.header)}>
                    <FaUserShield className={clsx(styles.icon)} />
                    <h2>{title}</h2>
                </div>
            )}
            <div className={clsx(styles.body)}>{children}</div>
        </section>
    )
}
