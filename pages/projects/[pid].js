import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

import styled from 'styled-components';

import Heading from '../../components/heading/Heading';

import About from '../../components/about/About';
import Body from '../../components/body/Body';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Hero from '../../components/hero/Hero';
import Navbar from '../../components/nav/Navbar';
import Main from '../../components/main/Main';
import RecentWork from '../../components/recentwork/RecentWork';
import Footer from '../../components/footer/Footer';

import { useState } from 'react';

import listOfProjects from '../../libs/projectData';

export default function Project({ projectData }) {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	console.log(projectData);
	return (
		<>
			<Head>
				<title>Jessicadev Portfolio Website</title>
				<meta name='description' content='Jessicadev.com Portfolio Website' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Body>
				<Header>
					<Sidebar isOpen={isOpen} toggle={toggle} />
					<Navbar toggle={toggle} />
				</Header>
				<Main>this is my project</Main>
				<Footer id='Footer'>Footer section</Footer>
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
