/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import FaBarsIcon from './FaBarsIcon'
import { Navlinks, NavLink, Logo, MobileIcon } from './NavbarElements'

const Navbar = ({ toggle }) => {
    return (
        <>
            <div>
                <Logo>
                    {' '}
                    <Link className="logo-link" href="/">
                        <img src="/images/logo.svg" alt="Jessicawarr logo" />
                    </Link>
                </Logo>
            </div>
            <MobileIcon onClick={toggle}>
                <FaBarsIcon />
            </MobileIcon>
            <Navlinks>
                <NavLink>
                    <Link className="nav-link" href="/#Header">
                        Home
                    </Link>
                </NavLink>
                <NavLink>
                    <Link className="nav-link" href="/#About">
                        About
                    </Link>
                </NavLink>
                <NavLink>
                    <Link className="nav-link" href="/projects">
                        Works
                    </Link>
                </NavLink>
                <NavLink>
                    <Link
                        className="nav-link"
                        href="mailto:iamjessicawarr@gmail.com"
                    >
                        <img
                            className="navbar-email-icon"
                            src="/images/email.png"
                            alt="email icon"
                        />
                    </Link>
                </NavLink>
            </Navlinks>
        </>
    )
}

export default Navbar
