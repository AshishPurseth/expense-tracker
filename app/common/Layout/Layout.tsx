import { clsx } from 'clsx'
import { ReactNode } from 'react'

import { Header } from '../Header/Header'
import styles from './Layout.module.scss'

type Props = {
    children: ReactNode
    userId: number
}

export const LayoutWrapper = ({ children, userId }: Props) => {
    return (
        <main className={clsx(styles.layout)}>
            <Header userId={userId} />
            <section className={clsx(styles.main)}>{children}</section>
            <footer className={clsx(styles.footer)}></footer>
        </main>
    )
}
