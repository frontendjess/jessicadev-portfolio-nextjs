import styled from 'styled-components';
import media from 'styled-media-query';

const Navlinks = styled.ul`
	font-family: var(--font-headings);
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	list-style-type: none;

	${media.lessThan('large')`
		display: none;
	`}
`;

const NavLink = styled.li`
	padding: 0 0 0 50px;

	a {
		text-decoration: none;
		color: var(--color-primary);
		font-family: var(--font-headings);
		text-transform: uppercase;
		font-size: 18px;
		letter-spacing: 1.8px;

		&:hover {
			color: var(--color-white);
			background-color: var(--color-black);
		}

		&.active {
			border-bottom: 3px solid var(--color-secondary);
		}
	}
`;

const Logo = styled.div`
	max-width: 75%;
	min-width: 185px;
	width: 100%;
	padding: 0.5rem 0.5rem 0.5rem 0;

	img {
		width: 100%;
	}
`;

const MobileIcon = styled.div`
	display: none;

	${media.lessThan('large')`
		display: block;
		position: absolute;
		top: 15px;
		right: -25px;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		color: var(--color-black);
	`}
`;

export { Navlinks, NavLink, Logo, MobileIcon };
