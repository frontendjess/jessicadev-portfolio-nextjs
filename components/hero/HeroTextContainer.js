import styled from 'styled-components'
import { useState } from 'react'
import media from 'styled-media-query'

const HeroText = styled.div`
    font-family: var(--font-headings);
    font-size: 2vw;
    letter-spacing: 0.2vw;
    text-transform: uppercase;
    line-height: 1.4;
    font-weight: var(--font-weight-bold);
    white-space: normal;

    ${media.lessThan('large')`
		font-size: var(--font-size);
		letter-spacing: var(--letter-spacing-size);
		line-height: var(--line-height-size);
        max-width: 74%;
	`}
`

const Wrapper = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;

    p {
        padding: 1rem 0;
    }
`

const HeroTextContainer = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Wrapper>
            <HeroText>
                {isOpen ? (
                    <span>
                        A creative dev &{' '}
                        <h4 className="secondary-text-color">
                            delving into the data dance is 🫶🏽
                        </h4>{' '}
                        — effortlessly binding APIs, transforming JSON, and
                        enhancing user interfaces in Next.Js, React & Svelte for
                        a seamless experience 🔮
                    </span>
                ) : (
                    <span>
                        Front-end Developer skilled in creating{' '}
                        <h4 className="secondary-text-color">
                            engaging and responsive
                        </h4>{' '}
                        websites & applications with modern frameworks. Focused
                        on collaboration and tangible business outcomes
                    </span>
                )}
            </HeroText>
            <p className="tell-me-more" onClick={() => setIsOpen(!isOpen)}>
                &#123; TELL ME MORE &#125;
            </p>
        </Wrapper>
    )
}

export default HeroTextContainer
