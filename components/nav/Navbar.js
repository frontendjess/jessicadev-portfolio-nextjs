import styled from 'styled-components';
import Navlinks from './Navlinks';
import Logo from './Logo';

const NavLink = styled.div`
	padding: 0 25px;

	a {
		text-decoration: none;
		color: var(--color-primary);
		font-family: var(--font-headings);
		text-transform: uppercase;
		font-size: 18px;
		letter-spacing: 1.8px;
	}
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
					<a href='#portfolio'>Portfolio</a>
				</NavLink>
				<NavLink>
					<a href='mailto:hello@jessicadev.com'>Contact Me</a>
				</NavLink>
			</Navlinks>
		</>
	);
};

export default Navbar;
