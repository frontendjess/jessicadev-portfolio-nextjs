import Link from 'next/link';
import FaBarsIcon from './FaBarsIcon';
import { Navlinks, NavLink, Logo, MobileIcon } from './NavbarElements';

const Navbar = ({ toggle }) => {
	return (
		<>
			<div>
				<Logo>
					{' '}
					<Link href='/'>
						<a className='logo-link'>
							<img src='/images/logo.svg' alt='logo' />
						</a>
					</Link>
				</Logo>
			</div>
			<MobileIcon onClick={toggle}>
				<FaBarsIcon />
			</MobileIcon>
			<Navlinks>
				<NavLink>
					<Link className='nav-link' href='/#Header'>
						<a>Home</a>
					</Link>
				</NavLink>
				<NavLink>
					<Link className='nav-link' href='/#About'>
						<a>About</a>
					</Link>
				</NavLink>
				<NavLink>
					<Link className='nav-link' href='/projects'>
						<a>Works</a>
					</Link>
				</NavLink>
				<NavLink>
					<Link
						className='nav-link'
						href='mailto:hello@jessicadev.com'
						passHref>
						<img
							className='navbar-email-icon'
							src='../images/email.png'
							alt='email icon'
						/>
					</Link>
				</NavLink>
			</Navlinks>
		</>
	);
};

export default Navbar;
