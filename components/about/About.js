import styled from 'styled-components';

const AboutMeContainer = styled.div`
	width: 100%;
	height: 100vh;
	background: url(../images/jessica.png) right/cover no-repeat;
	background-size: cover;
`;

const AboutMeTextContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	border: solid 1px red;
`;

const AboutMeDreamBigText = styled.div`
	border: solid 1px blue;
	font-size: 81px;
	width: 30vw;
`;
const AboutMeInspoText = styled.div`
	border: solid 1px blue;
`;

const About = () => {
	return (
		<AboutMeContainer>
			<AboutMeTextContainer>
				<AboutMeDreamBigText>
					<h2>Dream big so you never limit your own success</h2>
				</AboutMeDreamBigText>
				<AboutMeInspoText>
					<p>THE INSPIRATION AND MOTIVATION BEHIND JESSICA</p>
				</AboutMeInspoText>
			</AboutMeTextContainer>
		</AboutMeContainer>
	);
};

export default About;
