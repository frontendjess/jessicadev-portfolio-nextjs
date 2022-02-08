import styled from 'styled-components';
import media from 'styled-media-query';

const Header = styled.div`
	width: 100%;
	flex: 0 0 78px;
	background-color: transparent;
	display: flex;
	flex-direction: row;
	wrap: no-wrap;
	justify-content: space-between;
	align-items: center;
	position: -webkit-sticky;
	position: sticky;
	top: 0;
	z-index: 10;

	${media.lessThan('large')`
		transition: 0.8s all ease;

	`}
`;

export default Header;
