import styled from 'styled-components';
import { WorkWithMe } from './FooterElements';

const FooterContainer = styled.footer`
	width: 100%;
`;

const Footer = () => {
	return (
		<FooterContainer>
			<WorkWithMe></WorkWithMe>
		</FooterContainer>
	);
};

export default Footer;
