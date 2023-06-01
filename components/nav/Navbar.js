import Link from "next/link";
import FaBarsIcon from "./FaBarsIcon";
import { Navlinks, NavLink, Logo, MobileIcon } from "./NavbarElements";
import Image from "next/image";

const Navbar = ({ toggle }) => {
    return (
        <>
            <div>
                <Logo>
                    {" "}
                    <Link href="/">
                        <a className="logo-link">
                            <Image
                                src="/images/logo.svg"
                                alt="Jesscicadev logo"
                                width={270}
                                height={116}
                            />
                        </a>
                    </Link>
                </Logo>
            </div>
            <MobileIcon onClick={toggle}>
                <FaBarsIcon />
            </MobileIcon>
            <Navlinks>
                <NavLink>
                    <Link className="nav-link" href="/#Header">
                        <a>Home</a>
                    </Link>
                </NavLink>
                <NavLink>
                    <Link className="nav-link" href="/#About">
                        <a>About</a>
                    </Link>
                </NavLink>
                <NavLink>
                    <Link className="nav-link" href="/projects">
                        <a>Works</a>
                    </Link>
                </NavLink>
                <NavLink>
                    <Link
                        className="nav-link"
                        href="mailto:hello@jessicadev.com"
                        passHref
                    >
                        <Image
                            className="navbar-email-icon"
                            src="/images/email.png"
                            alt="email icon"
                            width={44}
                            height={34}
                        />
                    </Link>
                </NavLink>
            </Navlinks>
        </>
    );
};

export default Navbar;
