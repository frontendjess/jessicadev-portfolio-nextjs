import styled from 'styled-components';
import Link from 'next/link';
import media from 'styled-media-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';

const FooterContainer = styled.footer`
	width: 100%;
`;

const BuildMagicTogetherText = styled.h3`
	font-family: var(--font-headings);
	text-transform: uppercase;
	font-size: var(--h3-size);
	letter-spacing: var(--letter-spacing-xl);
	line-height: var(--line-height-xl);
	text-shadow: 2px 2px 2px var(--color-tertiary);
`;

const IconArrow = styled.div`
	display: flex;
	justify-content: center;
`;

const BuildMagicTogether = () => {
	return (
		<div className='section-padding-top'>
			<BuildMagicTogetherText>
				Now that you know who I am, let&apos;s{' '}
				<span className='secondary-text-color'>dream big</span> & build some
				magic together
			</BuildMagicTogetherText>
			<IconArrow>
				<img src='../images/icon-arrow-down-left.svg' alt='arrow' />
			</IconArrow>
		</div>
	);
};

const FooterRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	${media.lessThan('medium')`
	flex-direction: column;
		flex-wrap: wrap;
	`}
`;

const FooterCol = styled.div`
	flex: 0 0 50%;

	a {
		font-family: var(--font-body);
		font-size: var(--font-size-md);
		letter-spacing: var(--letter-spacing-md);
		font-weight: var(--font-weight-reg);
	}
`;

const FooterAboutText = styled.p`
	text-align: right;

	${media.lessThan('medium')`
		padding-top: 50px;
		text-align: left;
	`}
`;

const FooterBtmCol = styled.div`
	flex: 0 0 50%;

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
`;

const FooterCTA = () => {
	return (
		<div className='section-padding-btm'>
			<FooterRow>
				<FooterCol>
					<div className='inner-content-padding-sm-btm'>
						<Link href='mailto:hello@jessicadev.com'>
							<a>EMAIL</a>
						</Link>
					</div>
					<div className='inner-content-padding-sm-btm'>
						<Link href='https://linkedin.com'>
							<a>LINKEDIN</a>
						</Link>
					</div>
					<div>
						<Link href='https://github.com/frontendjess'>
							<a>GITHUB</a>
						</Link>
					</div>
				</FooterCol>
				<FooterCol>
					<FooterAboutText>
						Like what you see?
						<br /> I designed my portfolio and built it on React & Next.js
					</FooterAboutText>
				</FooterCol>
			</FooterRow>
		</div>
	);
};

const FooterBottom = () => {
	return (
		<div className='inner-content-padding-btm'>
			<FooterRow>
				<FooterBtmCol>
					<Link href='#Header'>
						<a>
							Back to top <FontAwesomeIcon icon={faLongArrowAltUp} />
						</a>
					</Link>
				</FooterBtmCol>
				<FooterBtmCol>
					<FooterAboutText>&copy; 2022</FooterAboutText>
				</FooterBtmCol>
			</FooterRow>
		</div>
	);
};

const WorkWithMe = () => {
	return (
		<>
			<div className='marquee'>
				<h3>
					<div className='marquee-wrapper'>
						<div className='marquee-title'>
							<span className='marquee-font'> WORK WITH ME </span>
							<img src='../images/star.png' alt='star' />
						</div>
						<div className='marquee-title'>
							<span className='marquee-font'> WORK WITH ME </span>
							<img src='../images/star.png' alt='star' />
						</div>
						<div className='marquee-title'>
							<span className='marquee-font'> WORK WITH ME </span>
							<img src='../images/star.png' alt='star' />
						</div>
						<div className='marquee-title'>
							<span className='marquee-font'> WORK WITH ME </span>
							<img src='../images/star.png' alt='star' />
						</div>
						<div className='marquee-title'>
							<span className='marquee-font'> WORK WITH ME </span>
							<img src='../images/star.png' alt='star' />
						</div>
						<div className='marquee-title'>
							<span className='marquee-font'> WORK WITH ME </span>
							<img src='../images/star.png' alt='star' />
						</div>
						<div className='marquee-title'>
							<span className='marquee-font'> WORK WITH ME </span>
							<img src='../images/star.png' alt='star' />
						</div>
						<div className='marquee-title'>
							<span className='marquee-font'> WORK WITH ME </span>
							<img src='../images/star.png' alt='star' />
						</div>
					</div>
				</h3>
			</div>
		</>
	);
};

export {
	FooterContainer,
	BuildMagicTogether,
	WorkWithMe,
	FooterCTA,
	FooterBottom,
};
