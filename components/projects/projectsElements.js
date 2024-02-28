import styled from 'styled-components'
import media from 'styled-media-query'
import Link from 'next/link'

const GoBackContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 0 100px 0;
`

const GoBackCol1 = styled.div`
    flex: 0 0 15%;
`
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
`

const ProjectContainer = styled.div`
    width: 100%;
`

const ProjectTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;

    h1 {
        font-size: var(--h2-size);
        letter-spacing: var(--letter-spacing-xxl);
        line-height: var(--line-height-xxl);
        text-transform: uppercase;
        word-wrap: break-word;
        hyphens: auto;
        max-width: 100%;

        ${media.lessThan('large')`
			font-size: var(--h3-mobile-size);
			letter-spacing: var(--letter-spacing-lg);
			line-height: var(--line-height-lg);
		`}

        ${media.lessThan('small')`
		font-size: var(--h4-mobile-size);
		letter-spacing: var(--letter-spacing-md);
		line-height: var(--line-height-md);
		`}
    }
`

const ImageWrapper = styled.div`
    img {
        width: 100%;
    }
`

const ProjectDetailsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const ProjectDetailsCol = styled.div`
    width: 50%;
    padding: 50px 50px 0px 0;

    p {
        line-height: var(--line-height-size);
    }

    ${media.lessThan('medium')`
		width: 100%;
	`}
`

const ProjectObjectives = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 100px;
`

const ProjectObjectivesCol = styled.div`
    flex-basis: 40%;

    ${media.lessThan('medium')`
		flex-basis: 100%;
	`}
`

const ProjectObjectivesCap = styled.p`
    font-size: var(--font-size-md);
    letter-spacing: var(--letter-spacing-md);
    line-height: var(--line-height-md);
`

const ProjectObjectivesDetails = styled.div``

const ProjectObjectivesDetailsText = styled.p`
    font-style: italic;
`

const GoBack = () => {
    return (
        <div className="section-padding-top">
            <GoBackContainer>
                <GoBackCol1>
                    <img
                        src="../images/icon-go-back.svg"
                        alt="go back arrow icon"
                    />
                </GoBackCol1>
                <GoBackCol2>
                    <Link href="/projects" passHref>
                        <h3>
                            <a>Go back to all works & projects</a>
                        </h3>
                    </Link>
                </GoBackCol2>
            </GoBackContainer>
        </div>
    )
}

export {
    ProjectContainer,
    ProjectTitle,
    ImageWrapper,
    ProjectDetailsContainer,
    ProjectDetailsCol,
    ProjectObjectives,
    ProjectObjectivesCol,
    ProjectObjectivesCap,
    ProjectObjectivesDetails,
    ProjectObjectivesDetailsText,
    GoBack,
}
