import { NavLink } from '@remix-run/react'
import { clsx } from 'clsx'

import styles from './Header.module.scss'

export const Header = () => {
    return (
        <header className={clsx(styles.header)}>
            <img
                src="../../../public/purseth.png"
                alt="Purseth Family Logo"
                className={styles.logo}
            />
            <nav className={clsx(styles.nav)}>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Expense</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Grocery</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signup">Sign Up</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
