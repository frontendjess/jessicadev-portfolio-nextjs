import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import media from 'styled-media-query'

import {
    AboutMeDreamBigContainer,
    AboutMeTextContainer,
    AboutMeDreamBigText,
    AboutMeInspoText,
    PinkStar,
    AboutMeContainer,
    AboutMeRow,
    AboutMeTitle,
    AboutMeText,
} from './AboutElements'

const FlowerGraphic = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: 70%;
    height: auto;
    transition: transform 0.3s ease;
    transform: translate(-50%, 50%);

    &:hover {
        transform: translate(-50%, 50%) scale(1.1);
    }

    ${media.greaterThan('medium')`
        max-width: 50%;
        transform: translate(-20%, 50%);
    
        &:hover {
            transform: translate(-20%, 50%) scale(1.1); 
        }
    `}

    ${media.greaterThan('large')`
        max-width: 30%;
        transform: translate(-20%, 50%);
    
        &:hover {
            transform: translate(-20%, 50%) scale(1.1); 
        }
    `}

    ${media.greaterThan('huge')`
        max-width: fit-content;
        transform: translate(-70%, 50%);

        &:hover {
            transform: translate(-70%, 50%) scale(1.1); 
        }
    `}
`

const About = () => {
    return (
        <>
            <AboutMeDreamBigContainer>
                <FlowerGraphic
                    src="/images/flowergraphic.png"
                    alt="Flower Graphic"
                />
                <AboutMeTextContainer>
                    <AboutMeDreamBigText>
                        <h2>
                            <span className="secondary-text-color">
                                Dream big
                            </span>{' '}
                            so you never limit your own success
                        </h2>
                    </AboutMeDreamBigText>
                    <AboutMeInspoText>
                        <p>THE INSPIRATION AND MOTIVATION BEHIND JESSICA</p>
                        <PinkStar>
                            <Image
                                src="/images/star.png"
                                alt="star graphic"
                                width={100}
                                height={100}
                            />
                        </PinkStar>
                    </AboutMeInspoText>
                </AboutMeTextContainer>
            </AboutMeDreamBigContainer>

            <AboutMeContainer id="About">
                <AboutMeRow>
                    <AboutMeTitle>
                        <h3 className="inner-content-padding-sm-btm">
                            About Me
                        </h3>
                    </AboutMeTitle>
                    <AboutMeText>
                        <h5 className="inner-content-padding-sm-btm">
                            At{' '}
                            <Link
                                href="https://noaignite.no"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Noa Ignite Norway
                            </Link>
                            , my role as a front-end developer transcends code
                            craftsmanship — it&apos;s about bringing ideas to
                            life through{' '}
                            <span className="secondary-text-color">
                                collaboration and proactive communication
                            </span>{' '}
                            within vibrant cross-functional DevOps teams.
                            Specializing in{' '}
                            <span className="tertiary-text-color">
                                responsive websites
                            </span>{' '}
                            and{' '}
                            <span className="tertiary-text-color">
                                engaging web applications
                            </span>
                            , I harness a comprehensive tech stack—including
                            Next.js, React, and Svelte—to create user interfaces
                            that are both functional and visually compelling.
                        </h5>
                        <p className="inner-content-padding-sm-btm">
                            My front-end proficiency is matched by my capacity
                            to navigate complex state management scenarios,
                            courtesy of tools like Apollo Client and GraphQL.
                            These enable me to craft seamless user experiences
                            with data-driven interactivity at their core.
                        </p>
                        <p className="inner-content-padding-sm-btm">
                            My fluency in the front-end languages of HTML, CSS,
                            and JavaScript is complemented by my adept use of
                            modern CSS frameworks such as Tailwind CSS and
                            Styled-Components. Most of my projects utilize
                            TypeScript for robust type-safe code. This skill set
                            enables me to create websites that are not only
                            visually appealing but also highly functional. On
                            the &apos;back of the front&apos;, I seamlessly
                            integrate APIs and tailor JSON structures, aligning
                            with the sophisticated requirements of contemporary
                            web solutions.
                        </p>
                        <p className="inner-content-padding-sm-btm">
                            For UI development and isolated testing, I turn to
                            Storybook, and when it comes to content management,
                            I implement headless CMS platforms like Sanity for
                            their dynamic capabilities. Adding life to
                            interfaces, I incorporate the Framer Motion library
                            for a touch of animation.
                        </p>
                        <p className="inner-content-padding-sm-btm">
                            I&apos;m dedicated to producing accessible and
                            inclusive web designs, ensuring that every site I
                            develop provides a welcoming experience for all
                            users. My work is a testament to my commitment to
                            delivering projects that meet client expectations,
                            optimize user experiences, and contribute to
                            business achievements.
                        </p>
                        <p className="inner-content-padding-sm-btm">
                            My portfolio features a variety of clients, from
                            Bama Gruppen to Bane NOR and Coop Obs Bygg, and
                            campaigns like Fretex & Øya Festival. I&apos;ve
                            crafted a variety of digital solutions, including
                            interactive corporate sites, sophisticated web
                            applications for optimization and resource
                            management, as well as engaging platforms with rich
                            visual designs. For a full view of my professional
                            journey or to delve into my technical writings,{' '}
                            <Link href="mailto:iamjessicawarr@gmail.com">
                                reach out to me
                            </Link>{' '}
                            for my CV or visit my{' '}
                            <Link
                                href="https://medium.com/@jessicadev.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Medium page
                            </Link>
                            . I went to school for business and business
                            adminstration and a 2 year front-end development
                            degree from Noroff Oslo. You can also find a list of{' '}
                            <Link href="/mycourses">my completed courses</Link>{' '}
                            in the most recent years.
                        </p>
                        <p className="inner-content-padding-sm-btm">
                            Engaging with the tech community and fostering
                            connections is something I&apos;m passionate about.
                            Let&apos;s explore how we can collaborate on future
                            tech endeavors.
                        </p>
                        <p className="inner-content-padding-sm-btm">
                            Away from the keyboard, I&apos;m dedicated to
                            family, design exploration, and pushing my
                            boundaries with new JS technologies, while keeping
                            fit and drawing inspiration from the narratives of
                            remarkable women.
                        </p>
                    </AboutMeText>
                </AboutMeRow>
                <AboutMeRow>
                    <AboutMeTitle>
                        <h3 className="inner-content-padding-sm-btm">
                            Skills / What I can do for you
                        </h3>
                    </AboutMeTitle>
                    <AboutMeText>
                        <h5 className="inner-content-padding-sm-btm">
                            HTML / CSS / JAVASCRIPT / TYPESCRIPT / REACT /
                            NEXT.JS / SVELTE / REDUX / HEADLESS CMS SUCH AS
                            SANITY & STRAPI / OPTIMIZELY CMS / AXIOS / GRAPHQL /
                            STATE MANAGEMENT / APOLLO CLIENT / BACKEND AS A
                            SERVICE SUCH AS SUPABASE / CSS FRAMEWORKS SUCH AS
                            STYLED-COMPONENTS OR TAILWIND / STORYBOOK / WCAG
                            ACCESSIBILITY / FRAMER MOTION / APIs / UX DESIGN /
                            BRANDING / WORDPRESS / DIGITAL MARKETING /
                            CROWDFUNDING CAMPAIGNS{' '}
                        </h5>

                        <div className="inner-content-flex">
                            <p className="bold">Front-End Development</p>
                            <p className="inner-content-flex">
                                <span>
                                    Proficient in modern JavaScript frameworks
                                    and libraries: React, Next.js, and Svelte.
                                </span>
                                <span>
                                    Skilled in TypeScript for robust, type-safe
                                    code.
                                </span>
                                <span>
                                    Creating responsive, mobile-first interfaces
                                    with Tailwind CSS, SCSS, Styled-Components /
                                    Emotion.
                                </span>
                            </p>
                        </div>

                        <div className="inner-content-flex">
                            <p className="bold">Back-End Integration</p>
                            <p className="inner-content-flex">
                                <span>
                                    Implementing headless CMS solutions like
                                    Sanity and Strapi for dynamic content
                                    management.
                                </span>
                                <span>
                                    Expertise in API integration with Axios and
                                    GraphQL for seamless data handling.
                                </span>
                                <span>
                                    Managing application state efficiently with
                                    Redux and Apollo Client.
                                </span>
                                <span>
                                    Configuring real-time databases and
                                    authentication with Supabase.
                                </span>
                            </p>
                        </div>

                        <div className="inner-content-flex">
                            <p className="bold">User Experience & Design</p>
                            <p className="inner-content-flex">
                                <span>
                                    Committed to Web Accessibility (WCAG) to
                                    create inclusive web experiences.
                                </span>
                                <span>
                                    Leveraging Framer Motion for engaging UI
                                    animations.
                                </span>
                                <span>
                                    Crafting user-centric interfaces with
                                    attention to UX Design principles.
                                </span>
                                <span>
                                    Employing Atomic Design principles to build
                                    scalable and maintainable design systems.
                                </span>
                            </p>
                        </div>

                        <div className="inner-content-flex">
                            <p className="bold">Additional Skills</p>
                            <p className="inner-content-flex">
                                <span>
                                    Continuously expanding my skill set and
                                    embracing the latest industry trends.
                                </span>
                                <span>
                                    Streamlining authentication flows with
                                    NextAuth.
                                </span>
                                <span>
                                    Ensuring robust front-end functionality with
                                    Material UI components.
                                </span>
                                <span>
                                    Automating workflows and integrating
                                    continuous integration/continuous deployment
                                    (CI/CD) with GitHub Actions.
                                </span>
                            </p>
                        </div>

                        <div className="inner-content-flex">
                            <p className="bold">Process & Methodology</p>
                            <p className="inner-content-flex">
                                <span>
                                    Agile development savvy, emphasizing quick
                                    iterations, adaptability, and continual
                                    enhancement.
                                </span>
                                <span>
                                    Expert in responsive design for seamless
                                    viewing on any device.
                                </span>
                                <span>
                                    Skilled in Git for streamlined version
                                    control and team collaboration.
                                </span>
                                <span>
                                    Committed to website performance
                                    optimization for superior user engagement
                                    and SEO.
                                </span>
                            </p>
                        </div>

                        <p className="inner-content-padding-sm-btm">
                            <span className="bold">Currently Learning</span> -{' '}
                            <span>
                                Advancing my capabilities with Svelte and its
                                ecosystem to stay at the forefront of
                                technology.
                            </span>
                        </p>

                        <p className="inner-content-padding-sm-btm">
                            <span className="bold">
                                Design & Prototyping Tools -{' '}
                            </span>{' '}
                            <span>
                                Proficient with Figma and Adobe XD for
                                high-fidelity design and prototyping.
                            </span>
                        </p>

                        <p className="inner-content-padding-sm-btm">
                            Feel free to reach out for a detailed conversation
                            on how my skills can translate into success for your
                            projects. For a deeper dive into my work, my Medium
                            articles offer a window into my technical insights.
                        </p>

                        <p className="inner-content-padding-sm-btm">
                            Let&apos;s{' '}
                            <Link href="mailto:iamjessicawarr@gmail.com">
                                Connect
                            </Link>{' '}
                            |{' '}
                            <Link
                                href="https://www.linkedin.com/in/jessica-dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </Link>{' '}
                            |{' '}
                            <Link
                                href="https://medium.com/@jessicadev.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Medium
                            </Link>
                        </p>

                        <p className="inner-content-padding-sm-btm">
                            As my focus is on my projects and delivery, my
                            portfolio may not be always up to date so feel free
                            to{' '}
                            <Link href="mailto:iamjessicawarr@gmail.com">
                                email me
                            </Link>{' '}
                            for an updated CV and project references.
                        </p>
                    </AboutMeText>
                </AboutMeRow>
            </AboutMeContainer>
        </>
    )
}

export default About
