import Head from 'next/head'

import Body from '../../components/body/Body'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/nav/Navbar'
import Main from '../../components/main/Main'
import Footer from '../../components/footer/Footer'

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
} from '../../components/projects/projectsElements'

import { useState } from 'react'

import Link from 'next/link'

import listOfProjects from '../../libs/projectData'

export default function Project({ projectData }) {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    console.log(projectData)

    const techstackText = projectData.techstack.join(' ')

    return (
        <>
            <Head>
                <title>Jessicawarr - {projectData.title}</title>
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
                                <p>
                                    <span className="secondary-text-color">
                                        Project type:
                                    </span>{' '}
                                    {projectData.projecttype}
                                </p>
                                <p>
                                    <span className="secondary-text-color">
                                        Tech:
                                    </span>{' '}
                                    {techstackText}
                                </p>
                                <p>
                                    <span className="secondary-text-color">
                                        Live website:
                                    </span>{' '}
                                    {projectData.url ? (
                                        <Link href={projectData.url}>
                                            <a
                                                className="specific-projects-link"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Visit the project website/demo
                                            </a>
                                        </Link>
                                    ) : projectData.isInternal ? (
                                        <span>
                                            Private client project - Access
                                            restricted to internal use
                                        </span>
                                    ) : (
                                        <span>
                                            Website launch pending - Check back
                                            soon for updates!
                                        </span>
                                    )}
                                </p>
                                {projectData.awards &&
                                    projectData.awards.length > 0 && (
                                        <p>
                                            <span className="secondary-text-color">
                                                Awards:
                                            </span>{' '}
                                            {projectData.awards.join(', ')}
                                        </p>
                                    )}
                            </ProjectDetailsCol>
                            <ProjectDetailsCol>
                                <p>
                                    <span className="secondary-text-color">
                                        Client:
                                    </span>{' '}
                                    {projectData.companyname}
                                </p>
                                <p>
                                    <span className="secondary-text-color">
                                        Date:
                                    </span>{' '}
                                    {projectData.date}
                                </p>
                                <p>
                                    <span className="secondary-text-color">
                                        Github Repo:
                                    </span>{' '}
                                    {(() => {
                                        if (projectData.repo) {
                                            return (
                                                <Link href={projectData.repo}>
                                                    <a className="specific-projects-link">
                                                        {projectData.repo}
                                                    </a>
                                                </Link>
                                            )
                                        } else {
                                            return (
                                                <span>
                                                    Not available for this
                                                    project
                                                </span>
                                            )
                                        }

                                        return null
                                    })()}
                                </p>
                            </ProjectDetailsCol>
                        </ProjectDetailsContainer>
                        <div className="section">
                            {' '}
                            <ImageWrapper>
                                <img
                                    src={projectData.featuredImage}
                                    alt={projectData.title}
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
                                    <img
                                        src={galleryImage.link}
                                        alt={projectData.title}
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
    )
}

function isValidPid(pid) {
    const parsedPid = parseInt(pid, 10);
    console.log(pid)
    return !isNaN(parsedPid) && parsedPid.toString() === pid; 
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = listOfProjects.map((project) => {
        return {
            params: {
                pid: project.pid,
            },
        }
    })
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    if (!isValidPid(params.pid)) {
        return {
            notFound: true,
        }
    }

    // Fetch necessary data for the project list using params.pid
    const projectData = getProjectData(params.pid)
    if (!projectData) {
        return {
            notFound: true,
        };
    }
    return { props: { projectData } }
}

function getProjectData(pid) {
    const id = parseInt(pid, 10);
    return listOfProjects.find((project) => project.pid === pid)
}
