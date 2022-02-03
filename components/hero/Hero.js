import React from 'react';
import RotatingGimmick from '../rotatinggimmick/Rotatinggimmick';
import HeroContainer from './HeroContainer';
import HeroText from './HeroText';
import HeroTitle from './HeroTitle';

function Hero() {
	return (
		<>
			<HeroContainer>
				<HeroText></HeroText>
				<HeroTitle></HeroTitle>
			</HeroContainer>

			<RotatingGimmick></RotatingGimmick>
		</>
	);
}

export default Hero;
