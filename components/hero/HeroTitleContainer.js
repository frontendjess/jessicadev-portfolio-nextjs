import styled from 'styled-components';
import RotatingGimmick from './../rotatinggimmick/Rotatinggimmick';
import media from 'styled-media-query';

const HeroTitle = styled.h1`
	font-family: var(--font-headings);
	font-size: var(--font-size-jumbo);
	text-transform: uppercase;
	letter-spacing: var(--letter-spacing-huge);
	text-shadow: 3px 3px 3px var(--color-tertiary);

	position: relative;
	text-align: right;

	${media.between('medium', 'large')`
		font-size: var(--font-size-huge);
		line-height: var(--line-height-huge);
	`}

	${media.lessThan('medium')`
		font-size: var(--font-size-xl);
		line-height: var(--line-height-xl);
	`}
`;

const HeroSubTitle = styled.h5`
	font-family: var(--font-headings);
	font-size: var(--font-size-md);
	text-transform: uppercase;
	letter-spacing: var(--letter-spacing-md);
	text-align: right;

	${media.lessThan('medium')`
	padding-top: 25px;
	`}

	${media.lessThan('small')`
		font-size: var(--font-size-sm);
		letter-spacing: var(--letter-spacing-sm);
	`}
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
