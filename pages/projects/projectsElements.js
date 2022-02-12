import styled from 'styled-components';
import Link from 'next/link';
import media from 'styled-media-query';

const GoBackContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 100px 0;
`;

const GoBackCol1 = styled.div`
	flex: 0 0 15%;
`;
const GoBackCol2 = styled.div`
	flex: 0 0 50%;

	h3 {
		text-transform: uppercase;
		font-family: var(--font-headings);
		font-size: var(--h3-size);
		letter-spacing: var(--letter-spacing-xl);
		line-height: var(--line-height-xl);
	}

	a {
		cursor: pointer;
	}

	${media.lessThan('medium')`
        h3 {
            font-size: var(--h4-size);
            letter-spacing: var(--letter-spacing-lg);
            line-height: var(--line-height-lg);
        }
    `}
`;

const ProjectContainer = styled.div`
	width: 100%;
`;

const ProjectTitle = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	border: solid 1px red;

	h1 {
		font-size: var(--h2-size);
		letter-spacing: var(--letter-spacing-xxl);
		line-height: var(--line-height-xxl);
		text-transform: uppercase;
	}
`;

const ImageWrapper = styled.div`
	img {
		width: 100%;
	}
`;

const ProjectDetailsContainer = styled.div`
	width: 100%;
	display: flex;
	border: solid 1px blue;
`;
const GoBack = () => {
	return (
		<GoBackContainer>
			<GoBackCol1>
				<img src='../images/icon-go-back.svg' />
			</GoBackCol1>
			<GoBackCol2>
				<Link href='/projects' passHref>
					<h3>
						<a>Go back to all works & projects</a>
					</h3>
				</Link>
			</GoBackCol2>
		</GoBackContainer>
	);
};

export {
	GoBack,
	ProjectContainer,
	ProjectTitle,
	ImageWrapper,
	ProjectDetailsContainer,
};
