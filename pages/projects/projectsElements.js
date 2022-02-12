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

export default GoBack;
