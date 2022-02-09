import styled from 'styled-components';
import {
	FooterContainer,
	BuildMagicTogether,
	WorkWithMe,
	FooterCTA,
} from './FooterElements';

const Footer = () => {
	return (
		<FooterContainer>
			<WorkWithMe />
			<BuildMagicTogether />
			<FooterCTA />
		</FooterContainer>
	);
};

export default Footer;
