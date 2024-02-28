import HeroContainer from './HeroContainer'
import HeroTextContainer from './HeroTextContainer'
import HeroTitleContainer from './HeroTitleContainer'

function Hero() {
    return (
        <>
            <HeroContainer id="Header">
                <HeroTextContainer></HeroTextContainer>
                <HeroTitleContainer></HeroTitleContainer>
            </HeroContainer>
        </>
    )
}

export default Hero
