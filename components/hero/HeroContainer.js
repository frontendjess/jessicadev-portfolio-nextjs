import styled from 'styled-components';
import media from 'styled-media-query';

const HeroContainer = styled.div`
	width: 100%;
	height: calc(100vh - 121px);
	display: flex;
	flex-wrap: no-wrap;
	justify-content: space-between;
	align-items: center;

	${media.lessThan('large')`
		flex-wrap: wrap;
		height: calc(100vh - 191px);
	`}
`;

export default HeroContainer;
