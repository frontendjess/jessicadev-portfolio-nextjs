import styled from 'styled-components';
import media from 'styled-media-query';
const Body = styled.div`
	width: 100vw;
	padding: 0 50px;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	background-color: #fff;

	${media.lessThan('medium')`
		padding: 0 25px;
	`}
`;

export default Body;
