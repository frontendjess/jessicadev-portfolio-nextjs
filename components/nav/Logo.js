import styled from 'styled-components';

const LogoImg = styled.div`
	max-width: 75%;
	min-width: 185px;
	width: 100%;
	padding: 1rem 1rem 1rem 0;

	img {
		width: 100%;
	}
`;

const Logo = () => {
	return (
		<div>
			<LogoImg>
				{' '}
				<img src='/images/logo.svg' alt='logo' />
			</LogoImg>
		</div>
	);
};

export default Logo;
