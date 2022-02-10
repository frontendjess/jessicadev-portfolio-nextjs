import Link from 'next/link';
import {
	AboutMeDreamBigContainer,
	AboutMeTextContainer,
	AboutMeDreamBigText,
	AboutMeInspoText,
	PinkStar,
	AboutMeContainer,
	AboutMeRow,
	AboutMeTitle,
	AboutMeText,
} from './AboutElements';

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

			<AboutMeContainer id='About'>
				<AboutMeRow>
					<AboutMeTitle>
						<h3>About Me</h3>
					</AboutMeTitle>
					<AboutMeText>
						<h5 className='inner-content-padding-sm-btm'>
							My <span className='secondary-text-color'>passion</span> is
							creating modern and beautiful solutions that optimizes the{' '}
							<span className='secondary-text-color'>user experience</span> and
							establishing an impactful{' '}
							<span className='tertiary-text-color'>online presence</span>.
						</h5>

						<p className='inner-content-padding-sm-btm'>
							Based in Oslo, I am a front end developer with a strong suit for
							creativity with an entrepreneurial and marketing mindset -{' '}
							<span className='italic'>
								this is when you go to school for business but end up as a
								developer.
							</span>
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
							framework, reading autobiographies of inspirational women and
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
							I am available for freelancing projects; let me help you translate
							your vision and business into an engaging and impactful online
							identity. Have a project you think I would be a great match for?{' '}
							<Link href='/emptycv.pdf' download>
								<a> Let&apos;s get a conversation started.</a>
							</Link>
						</p>

						<p className='inner-content-padding-sm-btm'>
							And to any potential employers, nice to see you here! Could you
							see me as a good fit for your company&apos;s front-end developer?
							I am
							<span className='important-text'>
								{' '}
								currently available for hire
							</span>
							; please feel free to{' '}
							<Link href='mailto:hello@jessicadev.com'>
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
