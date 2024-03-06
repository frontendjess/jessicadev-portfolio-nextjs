import styled from 'styled-components'
import Link from 'next/link'
import media from 'styled-media-query'
import Image from 'next/image'

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
                        <Image
                            className="mockup-image"
                            src="/images/selectedworks/banenor-mockup.png"
                            alt="Client work mockup"
                            width={1728}
                            height={1117}
                        />

                        <Link className="project-link" href="/projects/1">
                            01.{' '}
                            <span className="project-type-text">
                                [ Development ]
                            </span>{' '}
                            Bane NOR Wiki & Portals - HTML + SCSS + JavaScript /
                            TypeScript + Optimizely / Razor C# Website
                        </Link>
                    </RecentWorkDetails>
                </div>

                <div className="inner-content-padding">
                    <RecentWorkDetails>
                        <Image
                            className="mockup-image"
                            src="/images/selectedworks/bama-mockup.png"
                            alt="Client work mockup"
                            width={1728}
                            height={1117}
                        />

                        <Link className="project-link" href="/projects/2">
                            02.{' '}
                            <span className="project-type-text">
                                [ Development ]
                            </span>{' '}
                            Bama Gruppen Transportation Optimization - Next.Js +
                            Storybook + Tailwind + GraphQL + Apollo + TurboRepo
                            Web Application
                        </Link>
                    </RecentWorkDetails>
                </div>

                <div className="inner-content-padding">
                    <RecentWorkDetails>
                        <Image
                            className="mockup-image"
                            src="/images/selectedworks/oyaxfretex-mockup.png"
                            alt="Client work mockup"
                            width={1728}
                            height={1117}
                        />

                        <Link className="project-link" href="/projects/4">
                            03.{' '}
                            <span className="project-type-text">
                                [ Development ]
                            </span>{' '}
                            Øya X Fretex - Next.js + Tailwind + Framer Motion
                            Website
                        </Link>
                    </RecentWorkDetails>
                </div>

                <div className="inner-content-padding-btm projects-row">
                    <div className="projects-col">
                        <div className="inner-content-padding-btm">
                            <p>WANT TO SEE MORE?</p>
                        </div>
                        <div className="inner-content-padding-btm">
                            <Link
                                className="projects-text-link-secondary"
                                href="/projects"
                            >
                                View all works and projects
                            </Link>
                        </div>

                        <div className="inner-content-padding-btm">
                            <Link
                                className="projects-text-link"
                                href="mailto:iamjessicawarr@gmail.com"
                            >
                                Or get in touch with me
                            </Link>
                        </div>
                    </div>
                    <div className="projects-col projects-col-star">
                        <Image src="/images/star.png" alt="star graphic" width={100} height={100} />
                    </div>
                </div>
            </Section>
        </>
    )
}

export default RecentWork
