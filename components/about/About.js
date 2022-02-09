import styled from 'styled-components';
import media from 'styled-media-query';
import Link from 'next/link';
import {
	AboutMeDreamBigContainer,
	AboutMeTextContainer,
	AboutMeDreamBigText,
	AboutMeInspoText,
	PinkStar,
} from './AboutElements';

const AboutMeContainer = styled.div`
	width: 100%:
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	${media.greaterThan('large')`
		padding-top: 125px;
	`}

	${media.between('medium', '956px')`
		padding-top: 330px;
	`}

	${media.between('957px', '981px')`
		padding-top: 200px;
	`}

	${media.between('982px', '1097px')`
		padding-top: 100px;
	`}
`;

const AboutMeRow = styled.div`
	display: flex;
	flex-direction: row;
	padding: 100px 0 0 0;

	${media.lessThan('large')`
		flex-direction: column;
	`}
`;

const AboutMeTitle = styled.div`
	flex: 1 1 50%;
	padding-right: 50px;

	h3 {
		font-family: var(--font-headings);
		font-size: var(--h3-size);
		text-transform: uppercase;
		line-height: var(--line-height-xl);
		letter-spacing: var(--letter-spacing-xl);
	}
`;

const AboutMeText = styled.div`
	flex: 0 1 50%;

	h5 {
		font-family: var(--font-headings);
		font-size: var(--h5-size);
		text-transform: uppercase;
		line-height: var(--line-height-md);
		letter-spacing: var(--letter-spacing-md);
	}
`;

const About = () => {
	return (
		<>
			<AboutMeDreamBigContainer>
				<AboutMeTextContainer>
					<AboutMeDreamBigText>
						<h2>
							<span className='secondary-text-color'>Dream big</span> so you
							never limit your own success
						</h2>
					</AboutMeDreamBigText>
					<AboutMeInspoText>
						<p>THE INSPIRATION AND MOTIVATION BEHIND JESSICA</p>
						<PinkStar>
							<img src='../images/star.png' alt='star graphic' />
						</PinkStar>
					</AboutMeInspoText>
				</AboutMeTextContainer>
			</AboutMeDreamBigContainer>

			<AboutMeContainer>
				<AboutMeRow>
					<AboutMeTitle>
						<h3>About Me</h3>
					</AboutMeTitle>
					<AboutMeText>
						<h5 className='inner-content-padding-sm-btm'>
							My passion is creating modern and beautiful solutions that
							optimizes the user experience and establishing an impactful online
							presence.
						</h5>

						<p className='inner-content-padding-sm-btm'>
							Based in Oslo, I am a front end developer with a strong suit for
							creativity with an entrepreneurial and marketing mindset - this is
							when you go to school for business but end up as a developer.
						</p>
						<p className='inner-content-padding-sm-btm'>
							I am currently on my last semester of my 2 year front-end
							development education at Noroff Oslo. This hasn&apos;t stopped me
							from working on projects for clients through my freelancing
							company.
						</p>
						<p className='inner-content-padding-sm-btm'>
							I have experience working with all kinds of clients; usually the
							kinds that aren&apos;t afraid to dream big.😊
						</p>
						<p className='inner-content-padding-sm-btm'>
							On my free time, you can catch me trying to teach my toddler yoga
							and patience, working on a couple side projects, learning a new
							framework, reading autobiographis of inspirational women and
							basking in any sunlight the Norwegian weather will grant us.
						</p>
					</AboutMeText>
				</AboutMeRow>
				<AboutMeRow>
					<AboutMeTitle>
						<h3>Skills / What I can do for you</h3>
					</AboutMeTitle>
					<AboutMeText>
						<h5 className='inner-content-padding-sm-btm'>
							HTML / CSS / JAVASCRIPT / REACT / NEXT.JS / UX DESIGN / BRANDING /
							WORDPRESS / HEADLESS CMS SUCH AS STRAPI / DIGITAL MARKETING /
							CROWDFUNDING CAMPAIGNS{' '}
						</h5>

						<p className='inner-content-padding-sm-btm'>
							Let me help you translate your vision and business into an
							engaging and impactful online identity. Have a project you think I
							would be a great match for?{' '}
							<Link href='/emptycv.pdf' download>
								<a> Let&apos;s get a conversation started.</a>
							</Link>
						</p>

						<p className='inner-content-padding-sm-btm'>
							And to any potential employers, nice to see you here! I am
							currently available for hire; please feel free to{' '}
							<Link href='/emptycv.pdf' download>
								<a>email me</a>
							</Link>
							, you can also&nbsp;
							<Link href='/emptycv.pdf' download>
								<a>download my CV here</a>
							</Link>
							.
						</p>
					</AboutMeText>
				</AboutMeRow>
			</AboutMeContainer>
		</>
	);
};

export default About;
