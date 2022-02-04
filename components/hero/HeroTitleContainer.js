import styled from 'styled-components';
import RotatingGimmick from './../rotatinggimmick/Rotatinggimmick';

const HeroTitle = styled.h1`
	font-family: var(--font-headings);
	font-size: var(--font-size-jumbo);
	text-transform: uppercase;
	letter-spacing: var(--letter-spacing-jumbo);
	text-shadow: 3px 3px 3px var(--color-tertiary);

	position: relative;
	text-align: right;
`;

const HeroSubTitle = styled.h5`
	font-family: var(--font-headings);
	font-size: var(--font-size-md);
	text-transform: uppercase;
	letter-spacing: var(--letter-spacing-md);
	text-align: right;
`;

const Wrapper = styled.div`
	flex: 1 1 auto;
	display: flex;
	flex-direction: column;
	position: relative;
`;

const WrapperRotatingGimmick = styled.div`
	position: absolute;
	bottom: -145px;
	left: 0;
`;

const HeroTitleContainer = () => {
	return (
		<Wrapper>
			<HeroTitle>Jessica Warr</HeroTitle>
			<HeroSubTitle>NÉE MITCHELL</HeroSubTitle>

			<WrapperRotatingGimmick>
				{' '}
				<RotatingGimmick />
			</WrapperRotatingGimmick>
		</Wrapper>
	);
};

export default HeroTitleContainer;
