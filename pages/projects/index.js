import Head from 'next/head'
import styled from 'styled-components'
import media from 'styled-media-query'

import Body from '../../components/body/Body'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/nav/Navbar'
import Main from '../../components/main/Main'
import Footer from '../../components/footer/Footer'

import { useState } from 'react'
import Link from 'next/link'

import listOfProjects from '../../libs/projectData'

const ProjectsHeading = styled.div`
    display: flex;
    justify-content: center;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 20px;

    ${media.greaterThan('large')`
        flex-direction: row;
    `}
`

const FilterButton = styled.button`
    text-decoration: none;
    color: var(--color-primary);
    font-family: var(--font-headings);
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: 1.8px;
    padding: 10px 20px;
    margin: 0 10px;
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:hover {
        color: var(--color-white);
        background-color: var(--color-black);
    }

    &.active {
        color: var(--color-secondary);
        border-bottom: 3px solid var(--color-secondary);
    }
`

export default function Projects() {
    const [isOpen, setIsOpen] = useState(false)
    const [filter, setFilter] = useState('all')

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter)
    }

    const filteredProjects = listOfProjects.filter((project) => {
        if (filter === 'all') return true
        if (filter === 'professional') return project.isProfessional
        if (filter === 'educational') return !project.isProfessional
    })

    return (
        <>
            <Head>
                <title>Jessica Warr Portfolio Website</title>
                <meta
                    name="description"
                    content="Jessicawarr.com Portfolio Website"
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
                    <FilterContainer>
                        <FilterButton
                            onClick={() => handleFilterChange('all')}
                            className={filter === 'all' ? 'active' : ''}
                        >
                            {'{ All Projects }'}
                        </FilterButton>
                        <FilterButton
                            onClick={() => handleFilterChange('professional')}
                            className={
                                filter === 'professional' ? 'active' : ''
                            }
                        >
                            {'{ Professional }'}
                        </FilterButton>
                        <FilterButton
                            onClick={() => handleFilterChange('educational')}
                            className={filter === 'educational' ? 'active' : ''}
                        >
                            {'{ Educational }'}
                        </FilterButton>
                    </FilterContainer>
                    <div className="section all-projects-container">
                        {filteredProjects.map((project) => (
                            <div className="all-projects-col" key={project.pid}>
                                <img
                                    src={project.featuredImage}
                                    alt="projects image"
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
                                            {techstack}{' '}
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
                </Main>
                <Footer id="Footer"></Footer>
            </Body>
        </>
    )
}
