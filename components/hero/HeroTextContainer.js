import styled from "styled-components";
import { useState } from "react";
import media from "styled-media-query";

const HeroText = styled.div`
    font-family: var(--font-headings);
    font-size: var(--font-size-lg);
    letter-spacing: var(--letter-spacinglg);
    text-transform: uppercase;
    line-height: var(--line-height-lg);
    font-weight: var(--font-weight-bold);

    ${media.lessThan("large")`
		font-size: var(--font-size-md);
		letter-spacing: var(--letter-spacing-md);
		line-height: var(--line-height-md);
	`}
`;

const Wrapper = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;

    p {
        padding: 1rem 0;
    }
`;

const HeroTextContainer = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Wrapper>
            <HeroText>
                {isOpen ? (
                    <span>
                        Testing new{" "}
                        <h4 className="secondary-text-color">
                            JS frameworks & APIs
                        </h4>
                        excites me as much as my homemade gooey chocochip
                        cookies 🍪{" "}
                    </span>
                ) : (
                    <span>
                        Front-end Developer passionate about creating{" "}
                        <h4 className="secondary-text-color">
                            beautiful & accessible solutions
                        </h4>{" "}
                        with a user-centric approach
                    </span>
                )}
            </HeroText>
            <p className="tell-me-more" onClick={() => setIsOpen(!isOpen)}>
                &#123; TELL ME MORE &#125;
            </p>
        </Wrapper>
    );
};

export default HeroTextContainer;
