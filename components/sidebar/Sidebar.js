import {
    SidebarContainer,
    CloseIcon,
    Icon,
    SidebarWrapper,
    SidebarLink,
    SidebarMenu,
} from "./SidebarElements";
import Link from "next/link";

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onclick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink>
                        <Link
                            className="nav-link"
                            href="/#Header"
                            isOpen={isOpen}
                            onClick={toggle}
                        >
                            <a>Home</a>
                        </Link>
                    </SidebarLink>
                    <SidebarLink>
                        <Link
                            className="nav-link"
                            href="/#About"
                            isOpen={isOpen}
                            onClick={toggle}
                        >
                            <a>About</a>
                        </Link>
                    </SidebarLink>
                    <SidebarLink>
                        <Link
                            className="nav-link"
                            href="/projects"
                            isOpen={isOpen}
                            onClick={toggle}
                        >
                            <a>Works</a>
                        </Link>
                    </SidebarLink>
                    <SidebarLink>
                        <Link
                            className="nav-link"
                            href="mailto:hello@jessicadev.com"
                            isOpen={isOpen}
                            onClick={toggle}
                            passHref
                        >
                            <img
                                className="navbar-email-icon"
                                alt="email icon"
                                src="/images/email.png"
                            />
                        </Link>
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
