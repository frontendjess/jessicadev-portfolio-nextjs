import RotatingGimmick from '../rotatinggimmick/Rotatinggimmick';
import HeroContainer from './HeroContainer';
import HeroTextContainer from './HeroTextContainer';
import HeroTitleContainer from './HeroTitleContainer';

function Hero() {
	return (
		<>
			<HeroContainer>
				<HeroTextContainer></HeroTextContainer>
				<HeroTitleContainer></HeroTitleContainer>
			</HeroContainer>
		</>
	);
}

export default Hero;
