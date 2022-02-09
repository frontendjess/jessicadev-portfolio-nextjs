import styled from 'styled-components';
import Link from 'next/link';
import media from 'styled-media-query';

const RecentWorkTitle = () => {
	return <p>SELECTED MOST RECENT WORK</p>;
};

const RecentWorkDetails = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const Section = styled.section`
	padding: 100px 0;

	${media.lessThan('large')`
		padding: 200px 0 100px 0;
	`}
`;

const RecentWork = () => {
	return (
		<>
			<Section>
				<RecentWorkTitle />
				<div className='inner-content-padding'>
					<RecentWorkDetails>
						<img
							src='../images/selectedproject-restaurant.png'
							alt='restaurant project mockups'
						/>

						<a className='project-link' href=''>
							<span className='project-type-text'>[ Design ]</span> Project
							title
						</a>
					</RecentWorkDetails>
				</div>

				<div className='inner-content-padding-btm projects-row'>
					<div className='projects-col'>
						<div className='inner-content-padding-btm'>
							<a className='projects-text-link-secondary' href=''>
								View all works and projects
							</a>
						</div>

						<div className='inner-content-padding-btm'>
							<a
								className='projects-text-link'
								href='mailto:hello@jessicadev.com'>
								Or get in touch with me
							</a>
						</div>
					</div>
					<div className='projects-col projects-col-star'>
						<img src='../images/star.png' alt='star graphic' />
					</div>
				</div>
			</Section>
		</>
	);
};

export default RecentWork;
