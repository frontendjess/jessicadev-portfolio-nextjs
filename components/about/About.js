import styled from 'styled-components';
import media, { generateMedia } from 'styled-media-query';

const AboutMeContainer = styled.div`
	width: 100%;
	height: 85vh;
	background: url(../images/jessica.png) 100% 80% / cover no-repeat;
	background-size: cover;
	position: relative;
`;

const AboutMeTextContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	position: absolute;
	top: -90px;

	${media.lessThan('large')`
		flex-wrap: wrap;
	`}

	${media.lessThan('medium')`
		top: -40px;
	`}

	${media.lessThan('small')`
		top: -30px;
	`}
`;

const AboutMeDreamBigText = styled.div`
	font-size: 91px;
	flex: 2 1 40%;
	font-family: var(--font-headings);
	text-transform: uppercase;

	${media.between('large', 'huge')`
		font-size: 67px;
	`}

	${media.between('medium', 'large')`
		font-size: 67px;
		flex: 0 1 60%;
	`}

	${media.lessThan('medium')`
		font-size: 42px;
		flex: 0 1 100%;
	`}

	${media.lessThan('small')`
		font-size: 32px;
	`}
`;

const AboutMeInspoText = styled.div`
	flex: 1 0 60%;
	padding-left: 100px;
	padding-right: 300px;

	${media.lessThan('large')`
		padding-left: 0;
		padding-right: 0;
		padding-top: 25px;
		flex: 1 1 50%;

	`}

	${media.between('small', 'medium')`
		padding: 5rem 15rem 0 0;
	`}
`;

const PinkStar = styled.div`
	padding-top: 2rem;
	padding-left: 2rem;

	${media.lessThan('medium')`
	padding-left: 3rem;
	`}

	${media.lessThan('small')`
		padding-top: 3rem;
		padding-left: 0;
	`}
`;

const Filler = styled.div`
	height: 1000px;
`;
const About = () => {
	return (
		<>
			<AboutMeContainer>
				<AboutMeTextContainer>
					<AboutMeDreamBigText>
						<h2>
							<span className='secondary-text-color'>Dream big</span> so you
							never limit your own success
						</h2>
					</AboutMeDreamBigText>
					<AboutMeInspoText>
						<p>THE INSPIRATION AND MOTIVATION BEHIND JESSICA</p>
						<PinkStar>
							<img src='../images/star.png' alt='star graphic' />
						</PinkStar>
					</AboutMeInspoText>
				</AboutMeTextContainer>
			</AboutMeContainer>
			<Filler />
		</>
	);
};

export default About;
