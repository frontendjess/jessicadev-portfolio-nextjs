import styled from 'styled-components'
import Link from 'next/link'
import media from 'styled-media-query'

const RecentWorkTitle = () => {
    return <p>SELECTED MOST RECENT WORK</p>
}

const RecentWorkDetails = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Section = styled.section`
    padding: 100px 0;

    ${media.lessThan('large')`
		padding: 200px 0 100px 0;
	`}
`

const RecentWork = () => {
    return (
        <>
            <Section>
                <RecentWorkTitle />
                <div className="inner-content-padding">
                    <RecentWorkDetails>
                        <img
                            className="mockup-image"
                            src="/images/selectedworks/banenor-mockup.png"
                            alt="Client work mockup"
                        />

                        <Link href="/projects/1">
                            <a className="project-link">
                                01.{' '}
                                <span className="project-type-text">
                                    [ Development ]
                                </span>{' '}
                                Bane NOR Wiki & Portals - HTML + SCSS +
                                JavaScript / TypeScript + Optimizely / Razor C#
                                Website
                            </a>
                        </Link>
                    </RecentWorkDetails>
                </div>

                <div className="inner-content-padding">
                    <RecentWorkDetails>
                        <img
                            className="mockup-image"
                            src="/images/selectedworks/bama-gruppen-mockup.png"
                            alt="Client work mockup"
                        />

                        <Link href="/projects/2">
                            <a className="project-link">
                                02.{' '}
                                <span className="project-type-text">
                                    [ Development ]
                                </span>{' '}
                                Bama Gruppen Transportation Optimization -
                                Next.Js + Storybook + Tailwind + GraphQL +
                                Apollo + TurboRepo Web Application
                            </a>
                        </Link>
                    </RecentWorkDetails>
                </div>

                <div className="inner-content-padding">
                    <RecentWorkDetails>
                        <img
                            className="mockup-image"
                            src="/images/selectedworks/oyaxfretex-mockup.png"
                            alt="Client work mockup"
                        />

                        <Link href="/projects/4">
                            <a className="project-link">
                                02.{' '}
                                <span className="project-type-text">
                                    [ Development ]
                                </span>{' '}
                                Øya X Fretex - Next.js + Tailwind + Framer
                                Motion Website
                            </a>
                        </Link>
                    </RecentWorkDetails>
                </div>

                <div className="inner-content-padding-btm projects-row">
                    <div className="projects-col">
                        <div className="inner-content-padding-btm">
                            <p>WANT TO SEE MORE?</p>
                        </div>
                        <div className="inner-content-padding-btm">
                            <Link href="/projects">
                                <a className="projects-text-link-secondary">
                                    View all works and projects
                                </a>
                            </Link>
                        </div>

                        <div className="inner-content-padding-btm">
                            <a
                                className="projects-text-link"
                                href="mailto:hello@jessicadev.com"
                            >
                                Or get in touch with me
                            </a>
                        </div>
                    </div>
                    <div className="projects-col projects-col-star">
                        <img src="/images/star.png" alt="star graphic" />
                    </div>
                </div>
            </Section>
        </>
    )
}

export default RecentWork
