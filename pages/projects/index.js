import Head from "next/head";
import styled from "styled-components";

import Body from "../../components/body/Body";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/nav/Navbar";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";

import { useState } from "react";
import Link from "next/link";

import listOfProjects from "../../libs/projectData";
import Image from "next/image";

const ProjectsHeading = styled.div`
    display: flex;
    justify-content: center;
`;

export default function Projects() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Head>
                <title>Jessicadev Portfolio Website</title>
                <meta
                    name="description"
                    content="Jessicadev.com Portfolio Website"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Body>
                <Header>
                    <Sidebar isOpen={isOpen} toggle={toggle} />
                    <Navbar toggle={toggle} />
                </Header>
                <Main>
                    <ProjectsHeading id="Topofpage">
                        <h1>ALL WORKS</h1>
                    </ProjectsHeading>
                    <div className="section all-projects-container">
                        {listOfProjects.map((project) => (
                            <div className="all-projects-col" key={project.pid}>
                                <Image
                                    src={project.featuredImage}
                                    alt="projects image"
                                    width={1728}
                                    height={1117}
                                />
                                <p className="all-projects-title">
                                    {project.title}
                                </p>

                                <div>
                                    {project.techstack.map((techstack) => (
                                        <span
                                            className="all-projects-techstack"
                                            key={techstack}
                                        >
                                            {techstack}{" "}
                                        </span>
                                    ))}
                                </div>
                                <Link href={`/projects/${project.pid}`}>
                                    <a className="all-projects-link">
                                        View Project Case
                                    </a>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="section-padding-btm all-projects-container">
                        <div className="all-projects-col">
                            <Image
                                src="/images/featuredimage/project-gimpville.png"
                                alt="projects image"
                                width={1728}
                                height={1117}
                            />
                            <p className="all-projects-title">
                                Animations Studio Website
                            </p>

                            <div>
                                <span className="all-projects-techstack">
                                    Under development - Coming Soon
                                </span>
                            </div>
                        </div>
                    </div>
                </Main>
                <Footer id="Footer"></Footer>
            </Body>
        </>
    );
}
