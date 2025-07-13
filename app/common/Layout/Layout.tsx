import { clsx } from 'clsx'
import { ReactNode } from 'react'

import { Header } from '../Header/Header'
import styles from './Layout.module.scss'

type Props = {
    children: ReactNode
}

export const LayoutWrapper = ({ children }: Props) => {
    return (
        <main className={clsx(styles.layout)}>
            <Header />
            <section className={clsx(styles.main)}>{children}</section>
            <footer className={clsx(styles.footer)}></footer>
        </main>
    )
}
