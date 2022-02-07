import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import styled from 'styled-components';

import Heading from '../components/heading/Heading';

import About from '../components/about/About';
import Body from '../components/body/Body';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import Navbar from '../components/nav/Navbar';
import Main from '../components/main/Main';
import RecentWork from '../components/recentwork/RecentWork';
import Footer from '../components/footer/Footer';

// const Demo = styled.div`
// 	background: red;
// 	width: 200px;
// 	height: 150px;
// `;

export default function Home() {
	return (
		<>
			<Head>
				<title>Jessicadev Portfolio Website</title>
				<meta name='description' content='Jessicadev.com Portfolio Website' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Body>
				<Header id='Header'>
					<Navbar />
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
