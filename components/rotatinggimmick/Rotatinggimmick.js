import Image from "next/image";
import styled, { keyframes } from "styled-components";
import media from "styled-media-query";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
    max-width: 150px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${media.greaterThan("small")`
        max-width: 180px;
    `}
`;

const OuterCircle = styled.div`
    width: 100%;
    height: 100%;
    animation: ${rotate} 10s linear infinite;
    img {
        width: 100%;
    }
`;

const InnerCircle = styled.div`
    position: absolute;
    max-width: 68px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
        width: 100%;
        height: 100%;
    }
    img {
        width: 100%;
    }
`;

const Rotatinggimmick = () => {
    return (
        <Container>
            <OuterCircle>
                <Image
                    src="/images/outercircle.png"
                    alt="work with me"
                    width={328}
                    height={328}
                />
            </OuterCircle>
            <InnerCircle>
                <a href="mailto:hello@jessicadev.com">
                    <Image
                        src="/images/innercircle.png"
                        alt="email"
                        width={68}
                        height={52}
                    />
                </a>
            </InnerCircle>
        </Container>
    );
};

export default Rotatinggimmick;
