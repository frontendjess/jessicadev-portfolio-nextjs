import styled from 'styled-components';

const AboutMeContainer = styled.div`
	width: 100%;
	height: 100vh;
	background: url(../images/jessica.png) right/cover no-repeat;
	background-size: cover;
	position: relative;
`;

const AboutMeTextContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	border: solid 1px red;
	position: absolute;
	top: -75px;
`;

const AboutMeDreamBigText = styled.div`
	border: solid 1px blue;
	font-size: 81px;
	flex: 2 1 300px;
`;
const AboutMeInspoText = styled.div`
	border: solid 1px blue;
	flex: 1 1 150px;
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
