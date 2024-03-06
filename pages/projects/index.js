import Head from 'next/head'
import styled from 'styled-components'
import media from 'styled-media-query'
import Image from 'next/image'

import Body from '../../components/body/Body'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/nav/Navbar'
import Main from '../../components/main/Main'
import Footer from '../../components/footer/Footer'

import { useState } from 'react'
import Link from 'next/link'

import listOfProjects from '../../libs/projectData'
import Tooltip from '../../components/tooltip/Tooltip'

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
    border: none;
    background-color: transparent;
    cursor: pointer;
    width: 100%;

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
        if (filter === 'awards') {
            return project.awards && project.awards.length > 0
        }
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
                        <Tooltip
                            text="Not all my professional projects are included on my works list, such as the flooring service pilot project for Coop Obs Bygg - please refer to my linkedIn or email me for a full CV 💌"
                            tooltipAlign="right"
                        >
                            <h1>ALL WORKS</h1>
                        </Tooltip>
                    </ProjectsHeading>
                    <FilterContainer>
                        <Tooltip text="🫶🏽" marginLeft="filter">
                            <FilterButton
                                onClick={() => handleFilterChange('all')}
                                className={filter === 'all' ? 'active' : ''}
                            >
                                {'{ All Projects }'}
                            </FilterButton>
                        </Tooltip>
                        <Tooltip text="👩🏽‍💻" marginLeft="filter">
                            <FilterButton
                                onClick={() =>
                                    handleFilterChange('professional')
                                }
                                className={
                                    filter === 'professional' ? 'active' : ''
                                }
                            >
                                {'{ Professional }'}
                            </FilterButton>
                        </Tooltip>
                        <Tooltip text="📚" marginLeft="filter">
                            <FilterButton
                                onClick={() =>
                                    handleFilterChange('educational')
                                }
                                className={
                                    filter === 'educational' ? 'active' : ''
                                }
                            >
                                {'{ Educational }'}
                            </FilterButton>
                        </Tooltip>
                        <Tooltip text="🏆" marginLeft="filter">
                            <FilterButton
                                onClick={() => handleFilterChange('awards')}
                                className={filter === 'awards' ? 'active' : ''}
                            >
                                {'{ With Awards }'}
                            </FilterButton>
                        </Tooltip>
                    </FilterContainer>
                    <div className="section all-projects-container">
                        {filteredProjects.map((project) => (
                            <div className="all-projects-col" key={project.pid}>
                                <Image 
                                    src={project.featuredImage}
                                    alt="projects image"
                                    width={1728}
                                    height={1117}
                                    layout="responsive"
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
                                <Link
                                    className="all-projects-link"
                                    href={`/projects/${project.pid}`}
                                >
                                    View Project Case
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
