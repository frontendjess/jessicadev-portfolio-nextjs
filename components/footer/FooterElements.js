import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import media from 'styled-media-query'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons'

const FooterContainer = styled.footer`
    width: 100%;
`

const BuildMagicTogetherText = styled.h3`
    font-family: var(--font-headings);
    text-transform: uppercase;
    font-size: var(--h3-size);
    letter-spacing: var(--letter-spacing-xl);
    line-height: var(--line-height-xl);
    text-shadow: 2px 2px 2px var(--color-tertiary);

    ${media.lessThan('medium')`
		font-size: var(--h4-size);
		letter-spacing: var(--letter-spacing-lg);
		line-height: var(--line-height-lg);
	`}
`

const IconArrow = styled.div`
    display: flex;
    justify-content: center;

    ${media.lessThan('medium')`
		padding-left: 40px;
	`}
`

const BuildMagicTogether = () => {
    return (
        <div className="section-padding-top">
            <BuildMagicTogetherText>
                Now that you know who I am, let&apos;s{' '}
                <span className="secondary-text-color">dream big</span> & build
                some magic together
            </BuildMagicTogetherText>
            <IconArrow>
                <Image
                    src="/images/icon-arrow-down-left.svg"
                    alt="arrow"
                    width={169}
                    height={169}
                />
            </IconArrow>
        </div>
    )
}

const FooterRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${media.lessThan('medium')`
	flex-direction: column;
		flex-wrap: wrap;
	`}
`

const FooterCol = styled.div`
    flex: 0 0 50%;

    a {
        font-family: var(--font-body);
        font-size: var(--font-size-md);
        letter-spacing: var(--letter-spacing-md);
        font-weight: var(--font-weight-reg);
    }
`

const FooterAboutText = styled.div`
    text-align: right;
    font-family: var(--font-body);
    font-size: var(--font-size);
    letter-spacing: var(--letter-spacing-size);
    line-height: var(--line-height-size);

    ${media.lessThan('medium')`
		padding-top: 50px;
		text-align: left;
	`}
`

const FooterBtmCol = styled.div`
    flex: 0 0 50%;
    font-size: 24px;

    a {
        font-family: var(--font-body);
        font-size: var(--font-size);
        letter-spacing: var(--letter-spacing-size);
        font-weight: var(--font-weight-reg);
        text-transform: uppercase;
    }

    ${media.lessThan('medium')`
		padding-bottom: 25px;
	`}
`

const FooterCTA = () => {
    return (
        <div className="section-padding-btm">
            <FooterRow>
                <FooterCol>
                    <div className="inner-content-padding-sm-btm">
                        <Link href="mailto:iamjessicawarr@gmail.com">
                            EMAIL
                        </Link>
                    </div>
                    <div className="inner-content-padding-sm-btm">
                        <Link href="https://linkedin.com/in/jessica-dev">
                            LINKEDIN
                        </Link>
                    </div>
                    <div>
                        <Link href="https://github.com/frontendjess">
                            GITHUB
                        </Link>
                    </div>
                </FooterCol>
                <FooterCol>
                    <FooterAboutText>
                        <p className="italic">Like what you see?</p>
                        <p>
                            I designed my portfolio and developed it in Next.js
                            in Feb 2022 while I was in school 🪄 -
                        </p>
                        <p>
                            <span className="italic">
                                New version with Svelte & Sanity coming soon
                            </span>{' '}
                            👩🏽‍💻
                        </p>
                    </FooterAboutText>
                </FooterCol>
            </FooterRow>
        </div>
    )
}

const FooterBottom = () => {
    return (
        <div className="inner-content-padding-btm">
            <FooterRow>
                <FooterBtmCol>
                    <Link href="#Topofpage">
                        Back to top <FontAwesomeIcon icon={faLongArrowAltUp} />
                    </Link>
                </FooterBtmCol>
                <FooterBtmCol>
                    <FooterAboutText>&copy; 2022</FooterAboutText>
                </FooterBtmCol>
            </FooterRow>
        </div>
    )
}

const WorkWithMe = () => {
    const marqueeItems = Array.from({ length: 8 }, (_, index) => (
        <div className="marquee-title" key={index}>
            <span className="marquee-font"> WORK WITH ME </span>
            <Image src="/images/star.png" alt="star" width={100} height={100} />
        </div>
    ))

    return (
        <>
            <div className="marquee">
                <div className="marquee-wrapper">{marqueeItems}</div>
            </div>
        </>
    )
}

export {
    FooterContainer,
    BuildMagicTogether,
    WorkWithMe,
    FooterCTA,
    FooterBottom,
}
