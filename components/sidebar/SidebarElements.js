import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const SidebarContainer = styled.aside`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background: var(--color-white);
	display: grid;
	align-items: center;
	top: 0;
	left: 0;
	transition: 0.3s ease-in-out;
	// opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
	// top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

const CloseIcon = () => {
	return (
		<div>
			<FontAwesomeIcon className='times-icon' icon={faTimes} />
		</div>
	);
};

const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
`;

const SidebarWrapper = styled.div`
	color: var(--color-black);
`;

const SidebarLink = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	padding: 2rem;
	a {
		font-family: var(--font-body);
		font-size: var(--font-size-lg);
		letter-spacing: var(--letter-spacing-lg);
		text-transform: uppercase;
		text-decoration: none;
		list-style-type: none;
		transition: 0.2s ease-in-out;
		text-decoration: none;
		color: var(--color-black);
		cursor: pointer;
		text-align: center;

		&:hover {
			color: var(--color-white);
			background-color: var(--color-black);
			transition: 0.2s ease-in-out;
		}
	}
`;
const SidebarMenu = styled.div`
	color: black;
`;
export {
	SidebarContainer,
	CloseIcon,
	Icon,
	SidebarWrapper,
	SidebarLink,
	SidebarMenu,
};
