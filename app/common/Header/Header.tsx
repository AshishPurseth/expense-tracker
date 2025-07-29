import { Form, NavLink } from '@remix-run/react'
import { clsx } from 'clsx'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

import styles from './Header.module.scss'

type Props = {
    userId: number
}

export const Header = ({ userId }: Props) => {
    const [isOpen, setOpen] = useState(false)

    const toggle = () => setOpen((prev) => !prev)

    return (
        <header className={styles.header}>
            <img
                src="/purseth.png"
                alt="Purseth Family Logo"
                className={styles.logo}
            />

            <div
                className={styles.menuIcon}
                onClick={toggle}
                onKeyDown={(e) => e.key === 'Enter' && toggle()}
                role="button"
                tabIndex={0}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}>
                {isOpen ? <FiX /> : <FiMenu />}
            </div>

            {/* Nav: hidden on mobile unless open */}
            <nav className={clsx(styles.nav, isOpen && styles.navVisible)}>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            onClick={toggle}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/expense"
                            onClick={toggle}>
                            Expense
                        </NavLink>
                    </li>
                    {!userId ? (
                        <>
                            <li>
                                <NavLink
                                    to="/login"
                                    onClick={toggle}>
                                    Login
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/signup"
                                    onClick={toggle}>
                                    Sign Up
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <li>
                            <Form
                                method="post"
                                action="/logout">
                                <button
                                    type="submit"
                                    onClick={toggle}>
                                    Logout
                                </button>
                            </Form>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}
