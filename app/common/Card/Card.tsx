import { clsx } from 'clsx'
import { cloneElement, HTMLAttributes, ReactElement, ReactNode } from 'react'

import styles from './Card.module.scss'

type Props = {
    title?: string
    children: ReactNode
    className?: string
    icon?: ReactElement<HTMLAttributes<HTMLElement>>
}

export const Card = ({ children, title, className, icon }: Props) => {
    const iconElement = icon && cloneElement(icon, { className: clsx(styles.icon) })

    return (
        <section className={clsx(styles.card, className)}>
            {title && (
                <div className={clsx(styles.header)}>
                    {iconElement}
                    <h2>{title}</h2>
                </div>
            )}
            <div className={clsx(styles.body)}>{children}</div>
        </section>
    )
}
