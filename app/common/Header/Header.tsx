import { Form, NavLink } from '@remix-run/react'
import { clsx } from 'clsx'

import styles from './Header.module.scss'

type Props = {
    userId: number
}

export const Header = ({ userId }: Props) => {
    return (
        <header className={clsx(styles.header)}>
            <img
                src="/purseth.png"
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
                    {!userId ? (
                        <>
                            <li>
                                <NavLink to="/login">Login</NavLink>
                            </li>
                            <li>
                                <NavLink to="/signup">Sign Up</NavLink>
                            </li>
                        </>
                    ) : (
                        <li>
                            <Form
                                method="post"
                                action="/logout">
                                <button type="submit">Logout</button>
                            </Form>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}
