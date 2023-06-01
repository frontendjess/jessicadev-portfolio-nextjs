import Link from "next/link";
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
    AboutMeRowBtm,
} from "./AboutElements";
import Image from "next/image";

const About = () => {
    return (
        <>
            <AboutMeDreamBigContainer>
                <AboutMeTextContainer>
                    <AboutMeDreamBigText>
                        <h2>
                            <span className="secondary-text-color">
                                Dream big
                            </span>{" "}
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
                            I am a front-end developer who is constantly pushing
                            the boundaries of what&apos;s possible. By creating{" "}
                            <span className="secondary-text-color">
                                user-centric designs
                            </span>{" "}
                            and crafting{" "}
                            <span className="secondary-text-color">
                                beautiful
                            </span>{" "}
                            and{" "}
                            <span className="secondary-text-color">
                                functional solutions
                            </span>{" "}
                            that{" "}
                            <span className="tertiary-text-color">
                                optimize the user experience
                            </span>
                            , I&apos;ve helped my clients achieve their business
                            goals and establish a strong online presence.
                        </h5>

                        <p className="inner-content-padding-sm-btm">
                            I have experience working with all kinds of clients,
                            but I particularly enjoy working with those who
                            aren&apos;t afraid to dream big and take bold
                            actions to achieve their goals. With a background in
                            business, I bring an entrepreneurial and marketing
                            mindset to everything I do, always striving to find
                            innovative solutions to complex problems.
                        </p>
                        <p className="inner-content-padding-sm-btm">
                            In addition to my technical skills, I am a strong
                            communicator and collaborator, able to work closely
                            with designers and other developers to deliver
                            high-quality, user-friendly websites. I&apos;m
                            always excited to learn and try out new
                            technologies, and I balance my creativity with
                            strong technical skills to deliver complete
                            front-end solutions using technologies such as
                            React, Next.js, TypeScript, Framer Motion, Styled
                            Components, Tailwind, and headless CMS such as
                            Sanity. Through my expertise in these technologies,
                            I have delivered complete front-end solutions that
                            exceed expectations and bring a unique perspective
                            to my team.
                        </p>
                        <p className="inner-content-padding-sm-btm">
                            Most importantly, I recognize the importance of
                            building accessible websites for all users and I
                            take pride in creating inclusive designs. Through my
                            commitment to accessibility, I have been able to
                            improve the user experience for all users. I am
                            always seeking to improve my skills and knowledge in
                            this area, and I look forward to contributing to
                            projects that prioritize inclusivity and
                            accessibility.
                        </p>
                        <p className="inner-content-padding-sm-btm">
                            I am currently a front-end developer at{" "}
                            <Link href="https://noaignite.no">
                                <a target="_blank" rel="noopener noreferrer">
                                    Noa Ignite Norway
                                </a>
                            </Link>{" "}
                            🔥 - While I am not currently seeking new
                            opportunities, I am always open to connecting with
                            like-minded professionals and expanding my network.
                            Let&apos;s connect and see how we can collaborate on
                            exciting projects in the future.
                        </p>
                        <p className="inner-content-padding-sm-btm">
                            Some of my clients and projects have been Coop Obs
                            Bygg, Øya Festival, Fretex, The Garden Party, The
                            North Alliance, and more front-end projects that is
                            not mentioned on my portfolio.{" "}
                            <Link href="mailto:hello@jessicadev.com">
                                <a>Contact me</a>
                            </Link>{" "}
                            for a full CV. You can also check out my front-end
                            articles / tutorials on{" "}
                            <Link href="https://medium.com/@jessicadev.com">
                                <a target="_blank" rel="noopener noreferrer">
                                    Medium.com
                                </a>
                            </Link>
                            .
                        </p>
                        <p className="inner-content-padding-sm-btm">
                            On my free time, I enjoy making memories with my
                            family, looking for new design inspiration, testing
                            out new JS frameworks and APIs, strength training
                            and reading autobiographies of inspirational women.
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
                            NEXT.JS / REDUX / HEADLESS CMS SUCH AS SANITY &
                            STRAPI / DIGITAL MARKETING / CSS FRAMEWORKS SUCH AS
                            STYLED-COMPONENTS OR TAILWIND / REACT LIBRARIES /
                            WCAG ACCESSIBILITY / FRAMER MOTION / APIs / UX
                            DESIGN / BRANDING / WORDPRESS / CROWDFUNDING
                            CAMPAIGNS{" "}
                        </h5>

                        <p className="inner-content-padding-sm-btm">
                            I am available for freelancing projects; let me help
                            you translate your vision and business into an
                            engaging and impactful online identity. Have a
                            project you think I would be a great match for?{" "}
                            <Link href="mailto:hello@jessicadev.com">
                                <a> Let&apos;s get a conversation started.</a>
                            </Link>
                        </p>

                        <p className="inner-content-padding-sm-btm">
                            Feel free to{" "}
                            <Link href="mailto:hello@jessicadev.com">
                                <a>email me</a>
                            </Link>{" "}
                            for an updated CV and project references or check
                            out my{" "}
                            <Link href="https://www.linkedin.com/in/jessica-dev/">
                                <a target="_blank" rel="noopener noreferrer">
                                    linkedin
                                </a>
                            </Link>
                            .
                        </p>
                    </AboutMeText>
                </AboutMeRow>
                <AboutMeRowBtm>
                    <AboutMeTitle>
                        <h3 className="inner-content-padding-sm-btm">
                            MY TECHSTACK GROWTH 🌱
                        </h3>
                    </AboutMeTitle>
                    <AboutMeText>
                        <p className="inner-content-padding-sm-btm">
                            In addition to the above mentioned HTML, CSS,
                            JavaScript, Typescript React, Next.Js, Strapi.
                        </p>
                        <h5 className="inner-content-padding-sm-btm">
                            <span className="secondary-text-color">
                                [ MORE TECH SKILLS ]
                            </span>{" "}
                            SCSS / BOOTSTRAP / EMOTION / MATERIAL UI / HEADLESS
                            UI / STORYBOOK / GRAPHQL / AXIOS / JEST / CYPRESS /
                            NEXTAUTH / GIT GITHUB GITHUB ACTIONS / AND MUCH MORE
                        </h5>
                        <h5 className="inner-content-padding-sm-btm">
                            <span className="secondary-text-color">
                                [ CURRENTLY LEARNING ]
                            </span>{" "}
                            JEST / CYPRESS / LODASH / SVELTE
                        </h5>
                        <h5 className="inner-content-padding-sm-btm">
                            <span className="project-type-text">
                                [ WHAT I PLAN ON LEARNING NEXT ]
                            </span>{" "}
                            ANGULAR / VUE3
                        </h5>
                        <h5 className="inner-content-padding-sm-btm">
                            <span className="project-type-text">
                                [ MY DESIGN & PROTOTYPING TOOLS ]
                            </span>{" "}
                            FIGMA / ADOBE XD / ADOBE PHOTOSHOP{" "}
                        </h5>
                    </AboutMeText>
                </AboutMeRowBtm>
            </AboutMeContainer>
        </>
    );
};

export default About;
