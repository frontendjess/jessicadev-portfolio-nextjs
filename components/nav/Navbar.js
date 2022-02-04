import styled from 'styled-components';
import Logo from './Logo';

const NavLink = styled.div`
	padding: 0 0 0 50px;

	a {
		text-decoration: none;
		color: var(--color-primary);
		font-family: var(--font-headings);
		text-transform: uppercase;
		font-size: 18px;
		letter-spacing: 1.8px;
	}
`;

const Navlinks = styled.div`
	font-family: var(--font-headings);
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	text-decoration: none;
`;

const Navbar = () => {
	return (
		<>
			<Logo></Logo>
			<Navlinks>
				<NavLink>
					<a href=''>Home</a>
				</NavLink>
				<NavLink>
					<a href='#about'>About</a>
				</NavLink>
				<NavLink>
					{' '}
					<a href='#portfolio'>Works</a>
				</NavLink>
				<NavLink>
					<a href='mailto:hello@jessicadev.com'>
						<img className='navbar-email-icon' src='../images/email.png' />
					</a>
				</NavLink>
			</Navlinks>
		</>
	);
};

export default Navbar;
