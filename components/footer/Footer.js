import styled from 'styled-components'
import {
    FooterContainer,
    BuildMagicTogether,
    WorkWithMe,
    FooterCTA,
    FooterBottom,
} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <WorkWithMe />
            <BuildMagicTogether />
            <FooterCTA />
            <FooterBottom />
        </FooterContainer>
    )
}

export default Footer
