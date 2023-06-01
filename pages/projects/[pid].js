import Head from "next/head";

import Body from "../../components/body/Body";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/nav/Navbar";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";

import {
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
} from "../../components/projects/projectsElements";

import { useState } from "react";

import Link from "next/link";

import listOfProjects from "../../libs/projectData";
import Image from "next/image";

export default function Project({ projectData }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    console.log(projectData);

    const techstackText = projectData.techstack.join(" ");

    return (
        <>
            <Head>
                <title>Jessicadev - {projectData.title}</title>
                <meta name="description" content={projectData.title} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Body>
                <Header>
                    <Sidebar isOpen={isOpen} toggle={toggle} />
                    <Navbar toggle={toggle} />
                </Header>
                <Main id="Topofpage">
                    <ProjectContainer>
                        <ProjectTitle>
                            <h1>{projectData.title}</h1>
                        </ProjectTitle>

                        <ProjectDetailsContainer>
                            <ProjectDetailsCol>
                                <p>Project type: {projectData.projecttype}</p>
                                <p>Tech: {techstackText}</p>
                                <p>
                                    Live website:{" "}
                                    <Link href={projectData.url}>
                                        <a
                                            className="specific-projects-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Project website/demo
                                        </a>
                                    </Link>
                                </p>
                            </ProjectDetailsCol>
                            <ProjectDetailsCol>
                                <p>Client: {projectData.companyname}</p>
                                <p>Date: {projectData.date}</p>
                                <p>
                                    Github Repo:{" "}
                                    {(() => {
                                        if (projectData.repo) {
                                            return (
                                                <Link href={projectData.repo}>
                                                    <a className="specific-projects-link">
                                                        {projectData.repo}
                                                    </a>
                                                </Link>
                                            );
                                        } else {
                                            return (
                                                <span>
                                                    Not available for this
                                                    project
                                                </span>
                                            );
                                        }

                                        return null;
                                    })()}
                                </p>
                            </ProjectDetailsCol>
                        </ProjectDetailsContainer>
                        <div className="section">
                            {" "}
                            <ImageWrapper>
                                <Image
                                    src={projectData.featuredImage}
                                    alt={projectData.title}
                                    width={1728}
                                    height={1117}
                                />
                            </ImageWrapper>
                        </div>

                        <ProjectObjectives>
                            <ProjectObjectivesCol>
                                <ProjectObjectivesCap>
                                    {projectData.objectivesCap}
                                </ProjectObjectivesCap>
                            </ProjectObjectivesCol>
                            <ProjectObjectivesCol>
                                <ProjectObjectivesDetails>
                                    <ProjectObjectivesDetailsText>
                                        {projectData.objectivesDetails}
                                    </ProjectObjectivesDetailsText>
                                </ProjectObjectivesDetails>
                            </ProjectObjectivesCol>
                        </ProjectObjectives>

                        {projectData.gallery.map((galleryImage, index) => (
                            <div key={index} className="section">
                                <ImageWrapper>
                                    <Image
                                        src={galleryImage.link}
                                        alt={projectData.title}
                                        width={1728}
                                        height={1117}
                                    />
                                </ImageWrapper>
                            </div>
                        ))}
                    </ProjectContainer>
                </Main>
                <GoBack />
                <Footer id="Footer"></Footer>
            </Body>
        </>
    );
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = listOfProjects.map((project) => {
        return {
            params: {
                pid: project.pid,
            },
        };
    });
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const projectData = getProjectData(params.pid);
    return { props: { projectData } };
}

function getProjectData(pid) {
    return listOfProjects.find((project) => project.pid === pid);
}
