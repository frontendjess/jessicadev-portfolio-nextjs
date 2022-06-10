const listOfProjects = [
	{
		pid: '1',
		title: 'Restaurant Website Design',
		companyname: 'Side project',
		date: 'July 2021',
		projecttype: 'Design',
		techstack: ['Design Prototype'],
		url: 'https://www.figma.com/file/MQvmdykqa16EcXYVkQ2GG0/Thirteen-restaurant?node-id=0%3A1',
		repo: '',
		featuredImage: '/images/featuredimage/project-restaurant.png',
		gallery: [
			{
				link: '/images/gallery/1/restaurant-thirteen-moodboard.png',
				id: 1,
			},
			{
				link: '/images/gallery/1/restaurant-thirteen-design-mockup.png',
				id: 2,
			},
			{
				link: '/images/gallery/1/restaurant-thirteen-drinks-mockup.png',
				id: 3,
			},
			{
				link: '/images/gallery/1/restaurant-thirteen-menu-mockup.png',
				id: 4,
			},
			{
				link: '/images/gallery/1/restaurant-thirteen-some-mockup.png',
				id: 5,
			},
		],
		statusComplete: true,
		objectivesCap:
			'For the restaurant website, the main objective was to create an engaging design that showcases the beautiful imagery; capturing the users eyes and hunger for elevated foods and an equal impression of an exclusive experience.',
		objectivesDetails:
			'From desktop to mobile, each page was all about engaging the user. The main challenges were making sure that the images were not throwing off the user, or the aesthetics leaving the user confused and exiting before reaching their goal. Showcasing the images and tying together an elevated feel of aesthetics all at the same time of having a simple direction for the user was my ultimate task.',
	},
	{
		pid: '2',
		title: 'Design & Productions Studio Website',
		companyname: 'The Garden Party AS',
		date: 'October 2021',
		projecttype: 'Design + Development',
		techstack: ['Customized Wordpress'],
		url: 'https://thegardenparty.no',
		repo: '',
		featuredImage: '/images/featuredimage/project-tgp.png',
		gallery: [
			{
				link: '/images/gallery/2/thegardenparty-moodboard.png',
				id: 1,
			},
			{
				link: '/images/gallery/2/thegardenparty-mainfeatures-mockup.png',
				id: 2,
			},
			{
				link: '/images/gallery/2/thegardenparty-colorpicker.png',
				id: 3,
			},
			{
				link: '/images/gallery/2/thegardenparty-photos-mockup.png',
				id: 4,
			},
			{
				link: '/images/gallery/2/thegardenparty-projectsdetails-mockup.png',
				id: 5,
			},
		],
		statusComplete: true,
		objectivesCap:
			'The Garden Party is a design and productions studio based in Oslo. One of my fun clients who sure aren`t afraid to dream big. It was a delight for me to design and develop a custom wordpress website that showcases their quality productions.',
		objectivesDetails:
			'We explored multiple different styles I had come up with for their website and we went with a black and white theme that showcases their productions as soon as you enter the website. Then for each specific production page, we used high quality images & an engaging gallery with pleasurable colors that shows off their amazing work. My main objective was to develop a simple yet sophisticated website with a beautiful minimalistic architecture that works hand in hand with the clients works and productions. For a little contrast to the main page black and white, for each specific production page, the headings are specifically chosen colors from each production images.',
	},
	{
		pid: '3',
		title: 'Horology Deck Digital Marketing',
		companyname: 'Horology Deck',
		date: 'July 2022 - Ongoing',
		projecttype: 'Digital Marketing + Crowdfunding + SoMe',
		techstack: ['Digital Marketing', 'Crowdfunding Platform'],
		url: 'https://horologydeck.com',
		repo: '',
		featuredImage: '/images/featuredimage/project-horologydeck.png',
		gallery: [
			{
				link: '/images/gallery/3/horologydeck-socialmedia.png',
				id: 1,
			},
			{
				link: '/images/gallery/3/horologydeck-marketing-goals.png',
				id: 2,
			},
			{
				link: '/images/gallery/3/horologydeck-kickstarter.png',
				id: 3,
			},
			{
				link: '/images/gallery/3/horologydeck-campaign.png',
				id: 4,
			},
			{
				link: '/images/gallery/3/horologydeck-insta.png',
				id: 5,
			},
		],
		statusComplete: true,
		objectivesCap:
			'Horology Deck are a premium playing card decks; inspired by the world of watches. In July we launched a successful kickstarter campaign that reached 100% stretch goal in just 6 days. We had exactly 30 days to reach and engage new audiences and gain as many pledges as we can. In that month we accomplished 490 backers with a total of 180,000 NOK.',
		objectivesDetails:
			'Based in Oslo, and one of my digital marketing clients. With 4 marketing goals in task; optimizing the website, setting up social media, creating content thus building a loyal audience and increasing market reach and launching a successful Kickstarter campaign. Horology Deck has been an exciting project, and with the Kickstarter being complete. My next phase is sales in a larger scale.',
	},
	{
		pid: '4',
		title: 'E-commerce Interior Shop',
		companyname: 'School Project',
		date: 'December 2021',
		projecttype: 'Design + Development',
		techstack: ['HTML', 'SCSS', 'Bootstrap', 'JavaScript', 'Strapi'],
		url: 'https://interior-shop.netlify.app/',
		repo: 'https://github.com/Noroff-Fagskole/semester-project-frontendjess',
		featuredImage: '/images/featuredimage/project-interior.png',
		gallery: [
			{
				link: '/images/gallery/4/interiorshop-colorpalette.png',
				id: 1,
			},
			{
				link: '/images/gallery/4/interiorshop-moodboard.png',
				id: 2,
			},
			{
				link: '/images/gallery/4/interiorshop-styleguide.png',
				id: 3,
			},
			{
				link: '/images/gallery/4/interiorshop-mockup.png',
				id: 4,
			},
			{
				link: '/images/gallery/4/interiorshop-dashboard.png',
				id: 5,
			},
		],
		statusComplete: true,
		objectivesCap:
			'One of my more recent school projects; tasked with creating an e-commerce website using tech we have learned so far. Main objectives were ensuring a good user experience, UX/UI design while following today`s trends and design patterns.',
		objectivesDetails:
			'Inspired by the raw natural beauty of southern California, the simplistic and high quality design of Scandinavia; I created an interior design shop website. The UX design and branding process was exciting and I used my favorite design tool Figma to create my style guides and prototypes. I used HTML, SCSS, Bootstrap and a headless CMS Strapi for my API.',
	},
	{
		pid: '5',
		title: 'Curated Hotels Booking Website',
		companyname: 'School Project',
		date: 'June 2022',
		projecttype: 'Design + Development',
		techstack: ['Next.Js', 'Strapi', 'Heroku', 'Styled-Components'],
		url: 'https://holidazefortheurbantraveler.netlify.app/',
		repo: 'https://github.com/frontendjess/jessica-hotels-exam-project-nextjs',
		featuredImage: '/images/featuredimage/project-holidaze.png',
		gallery: [
			{
				link: '/images/gallery/5/hotelsnextjs-moodboard.png',
				id: 1,
			},
			{
				link: '/images/gallery/5/hotelsnextjs-branding.png',
				id: 2,
			},
			{
				link: '/images/gallery/5/hotelsnextjs-details.png',
				id: 3,
			},
			{
				link: '/images/gallery/5/hotelsnextjs-specifichotel.png',
				id: 4,
			},
			{
				link: '/images/gallery/5/hotelsnextjs-admin.png',
				id: 5,
			},
		],
		statusComplete: true,
		objectivesCap:
			"A case study to make a hotel booking website. Concept: Curated collection of hotels for the urban traveler. Merging the golden era of travel with today's innovation, sustainability, authenticity and comfort.",
		objectivesDetails:
			'Goal: To take the skills learned over the last 2 years and take on an extensive project where the finished product should reflect our general development capabilities, in addition to visual and technical skills. Website is fully responsive. There are both visitor section and admin section.',
	},
	{
		pid: '6',
		title: 'JavaScript Frameworks Course Assignment',
		companyname: 'School Project',
		date: 'March 2022',
		projecttype: 'Development',
		techstack: ['HTML', 'JavaScript', 'Next.Js'],
		url: 'https://jessica-nextjs-nextauth.netlify.app/',
		repo: 'https://github.com/frontendjess/js-frameworks-ca-jessica-nextjs',
		featuredImage: '/images/featuredimage/project-javascriptframeworks.png',
		gallery: [
			{
				link: '/images/gallery/6/javascriptframeworks-specificemployee.png',
				id: 1,
			},
			{
				link: '/images/gallery/6/javascriptframeworks-nextjs.png',
				id: 2,
			},
			{
				link: '/images/gallery/6/javascriptframeworks-formik.png',
				id: 3,
			},
			{
				link: '/images/gallery/6/javascriptframeworks-nextauth.png',
				id: 4,
			},
			{
				link: '/images/gallery/6/javascriptframeworks-netlify.png',
				id: 5,
			},
		],
		statusComplete: true,
		objectivesCap:
			'One of my school projects, for JavaScript Frameworks course assignment. The focus for this project was entirly code based and no styling. :)',
		objectivesDetails:
			'I built my project in Next.js, bootstrapped with create-next-app, hard-coded JSON, used Formik and NextAuth for login. Deployed live website on Netlify. The objectives were to showcase our understanding of paths, client-side authentication, fetching API data. I based my project around admin for a medical clinic employees list.',
	},
];

export default listOfProjects;
