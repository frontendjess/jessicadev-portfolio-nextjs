import Head from 'next/head'
import Link from 'next/link'
import Body from '../components/body/Body'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'
import Navbar from '../components/nav/Navbar'
import Main from '../components/main/Main'
import { useState } from 'react'

export default function Custom404() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

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
                <Main id="Topofpage">
                    <div className="inner-content-flex-row">
                        <h1>404 - Page Not Found</h1>
                        <p>Oops! The page you&apos;re looking for doesn&apos;t seem to exist.</p>                
                            <Link href="/">
                                <a className="projects-text-link-secondary" >Go back home</a>
                            </Link>
                    </div>
                </Main>
            </Body>
        </>
    )
  }