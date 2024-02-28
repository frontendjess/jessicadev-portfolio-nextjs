import Link from 'next/link'
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

const About = () => {
    return (
        <>
            <AboutMeDreamBigContainer>
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
                            <img src="/images/star.png" alt="star graphic" />
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
                            <Link href="https://noaignite.no">
                                <a target="_blank" rel="noopener noreferrer">
                                    Noa Ignite Norway
                                </a>
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
                                <a>reach out to me</a>
                            </Link>{' '}
                            for my CV or visit my{' '}
                            <Link href="https://medium.com/@jessicadev.com">
                                <a target="_blank" rel="noopener noreferrer">
                                    Medium page
                                </a>
                            </Link>
                            .
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
                                <p>
                                    Proficient in modern JavaScript frameworks
                                    and libraries: React, Next.js, and Svelte.
                                </p>
                                <p>
                                    Skilled in TypeScript for robust, type-safe
                                    code.
                                </p>
                                <p>
                                    Creating responsive, mobile-first interfaces
                                    with Tailwind CSS, SCSS, Styled-Components /
                                    Emotion.
                                </p>
                            </p>
                        </div>

                        <div className="inner-content-flex">
                            <p className="bold">Back-End Integration</p>
                            <p className="inner-content-flex">
                                <p>
                                    Implementing headless CMS solutions like
                                    Sanity and Strapi for dynamic content
                                    management.
                                </p>
                                <p>
                                    Expertise in API integration with Axios and
                                    GraphQL for seamless data handling.
                                </p>
                                <p>
                                    Managing application state efficiently with
                                    Redux and Apollo Client.
                                </p>
                                <p>
                                    Configuring real-time databases and
                                    authentication with Supabase.
                                </p>
                            </p>
                        </div>

                        <div className="inner-content-flex">
                            <p className="bold">User Experience & Design</p>
                            <p className="inner-content-flex">
                                <p>
                                    Committed to Web Accessibility (WCAG) to
                                    create inclusive web experiences.
                                </p>
                                <p>
                                    Leveraging Framer Motion for engaging UI
                                    animations.
                                </p>
                                <p>
                                    Crafting user-centric interfaces with
                                    attention to UX Design principles.
                                </p>
                                <p>
                                    Employing Atomic Design principles to build
                                    scalable and maintainable design systems.
                                </p>
                            </p>
                        </div>

                        <div className="inner-content-flex">
                            <p className="bold">Additional Skills</p>
                            <p className="inner-content-flex">
                                <p>
                                    Continuously expanding my skill set and
                                    embracing the latest industry trends.
                                </p>
                                <p>
                                    Streamlining authentication flows with
                                    NextAuth.
                                </p>
                                <p>
                                    Ensuring robust front-end functionality with
                                    Material UI components.
                                </p>
                                <p>
                                    Automating workflows and integrating
                                    continuous integration/continuous deployment
                                    (CI/CD) with GitHub Actions.
                                </p>
                            </p>
                        </div>

                        <div className="inner-content-flex">
                            <p className="bold">Process & Methodology</p>
                            <p className="inner-content-flex">
                                <p>
                                    Agile development savvy, emphasizing quick
                                    iterations, adaptability, and continual
                                    enhancement.
                                </p>
                                <p>
                                    Expert in responsive design for seamless
                                    viewing on any device.
                                </p>
                                <p>
                                    Skilled in Git for streamlined version
                                    control and team collaboration.
                                </p>
                                <p>
                                    Committed to website performance
                                    optimization for superior user engagement
                                    and SEO.
                                </p>
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
                                <a> Connect</a>
                            </Link>{' '}
                            |{' '}
                            <Link href="https://www.linkedin.com/in/jessica-dev/">
                                <a target="_blank" rel="noopener noreferrer">
                                    LinkedIn
                                </a>
                            </Link>{' '}
                            |{' '}
                            <Link href="https://medium.com/@jessicadev.com">
                                <a target="_blank" rel="noopener noreferrer">
                                    Medium
                                </a>
                            </Link>
                        </p>

                        <p className="inner-content-padding-sm-btm">
                            As my focus is on my projects and delivery, my
                            portfolio may not be always up to date so feel free
                            to{' '}
                            <Link href="mailto:iamjessicawarr@gmail.com">
                                <a>email me</a>
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
