import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import styled from 'styled-components';

import Heading from '../components/heading/Heading';

import About from '../components/about/About';
import Body from '../components/body/Body';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import Hero from '../components/hero/Hero';
import Navbar from '../components/nav/Navbar';
import Main from '../components/main/Main';
import RecentWork from '../components/recentwork/RecentWork';
import Footer from '../components/footer/Footer';

import { useState } from 'react';

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

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
				<Main>
					<Hero />
					<RecentWork />
					<About id='About' />
				</Main>
				<Footer id='Footer'>Footer section</Footer>
			</Body>
		</>
	);
}
