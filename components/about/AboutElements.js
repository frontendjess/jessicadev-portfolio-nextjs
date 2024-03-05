import styled from 'styled-components'
import media from 'styled-media-query'

const AboutMeDreamBigContainer = styled.div`
    width: 100%;
    height: 85vh;
    background: url(../images/jessica.png) 100% 80% / cover no-repeat;
    background-size: cover;
    position: relative;
`

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
`

const AboutMeDreamBigText = styled.div`
    font-size: 4.5vw;
    flex: 2 1 40%;
    font-family: var(--font-headings);
    text-transform: uppercase;
    text-shadow: 3px 3px 3px var(--color-tertiary);

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
		font-size: 8vw;
	`}
`

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
`

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
`

const AboutMeContainer = styled.div`
	width: 100%:
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	${media.greaterThan('large')`
		padding-top: 125px;
	`}

	${media.between('medium', '956px')`
		padding-top: 330px;
	`}

	${media.between('957px', '981px')`
		padding-top: 200px;
	`}

	${media.between('982px', '1097px')`
		padding-top: 100px;
	`}
`

const AboutMeRow = styled.div`
    display: flex;
    flex-direction: row;
    padding: 100px 0 100px 0;

    ${media.lessThan('large')`
		flex-direction: column;
	`}
`

const AboutMeRowBtm = styled.div`
    display: flex;
    flex-direction: row;
    padding: 100px 0 100px 0;

    ${media.lessThan('large')`
	flex-direction: column;
`}
`

const AboutMeTitle = styled.div`
    flex: 1 1 50%;
    padding-right: 50px;

    h3 {
        font-family: var(--font-headings);
        font-size: var(--h3-size);
        text-transform: uppercase;
        line-height: var(--line-height-xl);
        letter-spacing: var(--letter-spacing-xl);
    }
`

const AboutMeText = styled.div`
    flex: 0 1 50%;
    display: flex;
    flex-direction: column;
    gap: 25px;

    h5 {
        font-family: var(--font-headings);
        font-size: var(--h5-size);
        text-transform: uppercase;
        line-height: var(--line-height-md);
        letter-spacing: var(--letter-spacing-md);
    }

    a {
        font-weight: var(--font-weight-bold);
    }
`

export {
    AboutMeDreamBigContainer,
    AboutMeTextContainer,
    AboutMeDreamBigText,
    AboutMeInspoText,
    PinkStar,
    AboutMeContainer,
    AboutMeRow,
    AboutMeTitle,
    AboutMeText,
    AboutMeRowBtm,
}
