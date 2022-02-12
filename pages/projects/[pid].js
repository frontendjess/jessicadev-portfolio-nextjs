import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

import styled from 'styled-components';

import About from '../../components/about/About';
import Body from '../../components/body/Body';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Hero from '../../components/hero/Hero';
import Navbar from '../../components/nav/Navbar';
import Main from '../../components/main/Main';
import RecentWork from '../../components/recentwork/RecentWork';
import Footer from '../../components/footer/Footer';

import {
	GoBack,
	ProjectContainer,
	ProjectTitle,
	ImageWrapper,
	ProjectDetailsContainer,
	ProjectDetailsCol,
	ProjectObjectives,
	ProjectObjectivesCol,
	ProjectObjectivesCap,
	ProjectObjectivesDetails,
} from './projectsElements';

import { useState } from 'react';

import { useRouter } from 'next/router';

import Link from 'next/link';

import listOfProjects from '../../libs/projectData';

export default function Project({ projectData }) {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	console.log(projectData);

	// const router = useRouter();
	// const { pid } = router.query;

	// console.log('number of pid ', pid);

	// console.log('projectdata', typeof projectData.title);

	return (
		<>
			<Head>
				<title>Jessicadev - {projectData.title}</title>
				<meta name='description' content={projectData.title} />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Body>
				<Header>
					<Sidebar isOpen={isOpen} toggle={toggle} />
					<Navbar toggle={toggle} />
				</Header>
				<Main id='Topofpage'>
					<div className='section'>
						<ProjectContainer>
							<ProjectTitle>
								<h1>{projectData.title}</h1>
							</ProjectTitle>

							<ProjectDetailsContainer>
								<ProjectDetailsCol>
									<p>Project type: {projectData.projecttype}</p>
									<p>Tech: {projectData.techstack}</p>
								</ProjectDetailsCol>
								<ProjectDetailsCol>
									<p>Client: {projectData.companyname}</p>
									<p>Date: {projectData.date}</p>
								</ProjectDetailsCol>
							</ProjectDetailsContainer>
							<div className='section'>
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
										{projectData.objectivesDetails}
									</ProjectObjectivesDetails>
								</ProjectObjectivesCol>
							</ProjectObjectives>

							<div className='section'>
								<ImageWrapper>
									<img
										src={projectData.gallery[0].link}
										alt={projectData.title}
									/>
								</ImageWrapper>
							</div>
							<ImageWrapper>
								<img
									src={projectData.gallery[1].link}
									alt={projectData.title}
								/>
							</ImageWrapper>
						</ProjectContainer>
					</div>
				</Main>
				<GoBack />
				<Footer id='Footer'></Footer>
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
