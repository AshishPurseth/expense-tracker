import { Form, NavLink } from '@remix-run/react'
import { clsx } from 'clsx'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

import styles from './Header.module.scss'

type Props = {
    userId: number
}

export const Header = ({ userId }: Props) => {
    const [isOpen, setOpen] = useState<boolean>(false)

    const toggle = () => {
        setOpen(!isOpen)
    }
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
            <div className={styles.menuIcon}>{isOpen ? <FiMenu onClick={() => toggle()} /> : <FiX onClick={() => toggle()} />}</div>
        </header>
    )
}
