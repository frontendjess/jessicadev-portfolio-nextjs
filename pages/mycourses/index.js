import Head from 'next/head'
import Body from '../../components/body/Body'
import Header from '../../components/header/Header'
import Navbar from '../../components/nav/Navbar'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/sidebar/Sidebar'
import Main from '../../components/main/Main'
import styled from 'styled-components'
import listOfCourses from '../../libs/coursesData'
import media from 'styled-media-query'
import { useState } from 'react'

const CoursesContainer = styled.div`
    padding: 32px 0 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: var(--font-body);
    font-size: var(--font-size);
    color: var(--color-tertiary);
    line-height: var(--line-height-size);
    letter-spacing: var(--letter-spacing-size);
    text-transform: uppercase;
`

const CourseDate = styled.p``

const CourseDescription = styled.p``

const CourseItem = styled.div`
    background-color: #f8f8f8;
    padding: 1rem;
    margin-bottom: 1rem;
    width: 90%;
    max-width: 800px;
    border-left: 5px solid var(--color-secondary);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

    ${media.greaterThan('medium')`
        width: 100%;
    `}
`

const CourseLecturer = styled.p``

const CourseTitle = styled.p`
    font-weight: bold;
`

const MyCourses = () => {
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
                <Main>
                    <h1 className="inner-content-padding-sm-btm">My Courses</h1>
                    <p className="inner-content-padding-sm-btm">
                        Completed courses and training in the most recent years
                        👩🏽‍💻📖
                    </p>

                    <CoursesContainer>
                        {listOfCourses.map((course, index) => (
                            <CourseItem key={index}>
                                <CourseDate>{course.date}</CourseDate>
                                <CourseTitle>{course.title}</CourseTitle>
                                <CourseDescription>
                                    {course.description}
                                </CourseDescription>
                                <CourseLecturer>
                                    {course.lecturer}
                                </CourseLecturer>
                            </CourseItem>
                        ))}
                    </CoursesContainer>
                </Main>
                <Footer id="Footer" />
            </Body>
        </>
    )
}

export default MyCourses
