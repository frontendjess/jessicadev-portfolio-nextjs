import {
	SidebarContainer,
	CloseIcon,
	Icon,
	SidebarWrapper,
	SidebarLink,
	SidebarMenu,
} from './SidebarElements';
import Link from 'next/link';

const Sidebar = () => {
	return (
		<SidebarContainer>
			<Icon>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink>
						<Link className='nav-link' href='#Header'>
							<a>Home</a>
						</Link>
					</SidebarLink>
					<SidebarLink>
						<Link className='nav-link' href='#About'>
							<a>About</a>
						</Link>
					</SidebarLink>
					<SidebarLink>
						<Link className='nav-link' href='#Portfolio'>
							<a>Works</a>
						</Link>
					</SidebarLink>
					<SidebarLink>
						<Link className='nav-link' href='mailto:hello@jessicadev.com'>
							<img className='navbar-email-icon' src='../images/email.png' />
						</Link>
					</SidebarLink>
				</SidebarMenu>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
