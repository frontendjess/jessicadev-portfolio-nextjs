const listOfProjects = [
    {
        pid: '1',
        title: 'Banenor.no Wiki & Portals',
        companyname: 'Bane NOR',
        date: 'November 2023 - February 2024',
        projecttype: 'Development',
        techstack: [
            'HTML',
            'SCSS',
            'JavaScript',
            'TypeScript',
            'Optimizely',
            'Razor/C#',
        ],
        url: '',
        repo: '',
        featuredImage: '/images/featuredimage/project-banenor.png',
        gallery: [],
        statusComplete: true,
        objectivesCap:
            "As a frontend developer for Noa Ignite, I was assigned in developing the portals for Bane NOR, the Norwegian state-owned company overseeing national railway infrastructure, my role as lead front end was pivotal in developing Banenor.no's portals. In close collaboration with the UX and backend teams, we aimed to deliver an optimal user experience and ensure accessibility. I utilized HTML, SCSS, JavaScript, TypeScript, and Razor/C# in the development process.",
        objectivesDetails:
            "My tenure at Bane NOR involved a key role in developing various wikis and portals into the main website to enhance user interaction and accessibility. I employed Optimizely DXP to create new pages and refine existing functionalities, focusing on clean, maintainable code. My focus on implementing interactive elements like tooltips and popovers aimed to improve site navigation and adhere to WCAG 2.1 standards. My proficiency with CSS/SCSS, JavaScript, and HTML was instrumental in expanding the codebase while maintaining the company's brand style. Through collaboration with backend developers and team members, I helped to fortify the user interface and embraced a culture of continuous improvement. My engagement in agile methodologies, leveraging daily standups and sprint planning via Azure DevOps, was essential to our team's efficiency and the successful advancement of Bane NOR's digital platform. In essence, my contribution was crucial in refining Bane NOR's digital presence with a focus on user-centric design and smooth functionality, within a collaborative and progressive development environment. Note: The final product of this project is not yet live.",
        isInternal: false,
        isProfessional: true,
        awards: [],
    },
    {
        pid: '2',
        title: 'Bama Transportation Optimization Web Application',
        companyname: 'Bama Gruppen',
        date: 'June 2023 - October 2023',
        projecttype: 'Development',
        techstack: [
            'Next.Js',
            'JavaScript',
            'TypeScript',
            'Tailwind',
            'Storybook',
            'GraphQL',
            'Apollo',
            'Turborepo',
            'Tanstack Tables',
        ],
        url: '',
        repo: '',
        featuredImage: '/images/featuredimage/project-bama-gruppen.png',
        gallery: [],
        statusComplete: true,
        objectivesCap:
            'Frontend development efforts to enhance logistics and transportation efficiency for Bama Gruppen. With this solution, we were able to optimize the transportation of goods and reduce the environmental impact of the company. It has saved climate, time and money for Bama Gruppen. The project was recognized with the "Insight Award 2023".',
        objectivesDetails:
            "As a frontend developer at Noa Ignite, I played a pivotal role in consulting for Bama Gruppen, focusing on enhancing their transportation optimization web application. My contributions were critical in developing advanced data handling capabilities using GraphQL and Apollo Client, and in setting up Tanstack Table for superior data display and interaction. I led the creation of a robust UI component library utilizing Storybook, which streamlined the development workflow within the TurboRepo monorepo structure. My work supported the overarching objective of delivering innovative and efficient logistics solutions, significantly contributing to the project's success and recognition with the 'Insight Award 2023'.",
        isInternal: true,
        isProfessional: true,
        awards: ['Den Norske Dataforening Innsiktprisen / Insights Award 2023'],
    },
    {
        pid: '3',
        title: 'NoA Norge',
        companyname: 'The North Alliance',
        date: 'March 2023 - May 2023',
        projecttype: 'Development',
        techstack: ['Next.Js', 'JavaScript', 'Sanity Studio', 'Tailwind'],
        url: 'https://noanorge.no',
        repo: '',
        featuredImage: '/images/featuredimage/project-noanorge.png',
        gallery: [],
        statusComplete: true,
        objectivesCap:
            'As the main developer for The North Alliance (Noanorge.no), I built an accessible, interactive website using Next.js, Sanity Studio, TypeScript, React, and Tailwind CSS. The site highlighted member companies while ensuring an engaging user experience through interactive click and keyboard events. I implemented key features such as user registration and contact functionality using SendGrid and Slack APIs, providing an extensive Gaselle study PDF upon successful registration. To monitor user engagement and site performance, I integrated Vercel Analytics.',
        objectivesDetails:
            "For this project I heavily focused on maintaining strict accessibility guidelines. My proficiency in React was demonstrated through the development of components like SignUpForm and the implementation of SendGrid and Slack API handlers for efficient user data management. By developing custom React hooks, I facilitated responsive design and personalized rendering, while my use of server-side rendering (SSR) principles and optimized font deliveries contributed to overall site performance. Prioritizing SEO, I enhanced the website's visibility and incorporated seamless user navigation. I also actively monitored user engagement and integrated Vercel Analytics for efficient tracking. Despite tight deadlines, I successfully led most development tasks, coordinating effectively with a senior developer, a digital marketer functioning as a project manager, and a senior UX designer. My efforts culminated in high Lighthouse scores, reflecting the effectiveness of my development and optimization strategies.",
        isInternal: false,
        isProfessional: true,
        awards: [],
    },
    {
        pid: '4',
        title: 'Øya X Fretex',
        companyname: 'Fretex',
        date: 'September 2022 - November 2022',
        projecttype: 'Development',
        techstack: ['Next.Js', 'JavaScript', 'Tailwind', 'Framer Motion'],
        url: 'https://www.oyaxfretex.no/',
        repo: '',
        featuredImage: '/images/featuredimage/project-oyaxfretex.png',
        gallery: [
            {
                link: '/images/gallery/oyaxfretex/oya-x-fretex-2.png',
                id: '1',
            },
            {
                link: '/images/gallery/oyaxfretex/oya-x-fretex-3.png',
                id: '2',
            },
            {
                link: '/images/gallery/oyaxfretex/oya-x-fretex-4.png',
                id: '3',
            },
            {
                link: '/images/gallery/oyaxfretex/oya-x-fretex-5.png',
                id: '4',
            },
        ],
        statusComplete: true,
        objectivesCap:
            'Together with a small team of 3 developers, we have set up a static website built on Next.js and React. The site is built and hosted at Vercel. By using this technology, we have developed a lightning-fast and responsive website. All styling is handled by Tailwind while the most advanced animations are generated by Framer Motion. We aimed to build a website with a focus on harmonious movements throughout all pages of the site. This project has won 3 awards from Gulltaggen Awards 2023 and 1 nomination from Visuelt Awards 2023.',
        objectivesDetails:
            "A new campaign for Fretex; a collaboration with Øya Festival. The campaign and concept where Øya artists donate their clothes to Fretex. The design and development is produced by Noa Ignite in close collaboration with Anorak, who have been responsible for the media content. The end product is an original and unique website with animations and content that optimize the user experience. There are fun elements on the website where users can view the collection, find prices, and there are hints about where the items can be found. The goal for the digital solution has been to increase sales in Fretex stores, enhance Fretex's reputation among young people, strengthen Øya's position as a partner, and inspire young people to buy and give more second-hand.",
        isInternal: false,
        isProfessional: true,
        awards: [
            'Gulltaggen 2023 Nettsider Bronse / Websites Bronze',
            'Gulltaggen 2023 Beste Influencer Markedsføring Sølv / Best Influencer Marketing Silver',
            'Visuelt Awards 2023 Nominert / Nominated',
        ],
    },
    {
        pid: '5',
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
                link: '/images/gallery/horologydeck/horologydeck-socialmedia.png',
                id: 1,
            },
            {
                link: '/images/gallery/horologydeck/horologydeck-marketing-goals.png',
                id: 2,
            },
            {
                link: '/images/gallery/horologydeck/horologydeck-kickstarter.png',
                id: 3,
            },
            {
                link: '/images/gallery/horologydeck/horologydeck-campaign.png',
                id: 4,
            },
            {
                link: '/images/gallery/horologydeck/horologydeck-insta.png',
                id: 5,
            },
        ],
        statusComplete: true,
        objectivesCap:
            'Horology Deck are a premium playing card decks; inspired by the world of watches. In July we launched a successful kickstarter campaign that reached 100% stretch goal in just 6 days. We had exactly 30 days to reach and engage new audiences and gain as many pledges as we can. In that month we accomplished 490 backers with a total of 180,000 NOK.',
        objectivesDetails:
            'Based in Oslo, and one of my digital marketing clients. With 4 marketing goals in task; optimizing the website, setting up social media, creating content thus building a loyal audience and increasing market reach and launching a successful Kickstarter campaign. Horology Deck has been an exciting project, and with the Kickstarter being complete. My next phase is sales in a larger scale.',
        isInternal: false,
        isProfessional: true,
        awards: [],
    },
    {
        pid: '6',
        title: 'Design & Productions Studio Website',
        companyname: 'The Garden Party AS',
        date: 'October 2021 - Ongoing',
        projecttype: 'Design + Development',
        techstack: ['Customized Wordpress', 'Content Creation'],
        url: 'https://thegardenparty.no',
        repo: '',
        featuredImage: '/images/featuredimage/project-tgp.png',
        gallery: [
            {
                link: '/images/gallery/thegardenparty/thegardenparty-moodboard.png',
                id: 1,
            },
            {
                link: '/images/gallery/thegardenparty/thegardenparty-mainfeatures-mockup.png',
                id: 2,
            },
            {
                link: '/images/gallery/thegardenparty/thegardenparty-colorpicker.png',
                id: 3,
            },
            {
                link: '/images/gallery/thegardenparty/thegardenparty-photos-mockup.png',
                id: 4,
            },
            {
                link: '/images/gallery/thegardenparty/thegardenparty-projectsdetails-mockup.png',
                id: 5,
            },
        ],
        statusComplete: true,
        objectivesCap:
            'The Garden Party is a design and productions studio based in Oslo. One of my fun clients who sure aren`t afraid to dream big. It was a delight for me to design and develop a custom wordpress website that showcases their quality productions.',
        objectivesDetails:
            'We explored multiple different styles I had come up with for their website and we went with a black and white theme that showcases their productions as soon as you enter the website. Then for each specific production page, we used high quality images & an engaging gallery with pleasurable colors that shows off their amazing work. My main objective was to develop a simple yet sophisticated website with a beautiful minimalistic architecture that works hand in hand with the clients works and productions. For a little contrast to the main page black and white, for each specific production page, the headings are specifically chosen colors from each production images.',
        isInternal: false,
        isProfessional: true,
        awards: [],
    },
    {
        pid: '7',
        title: 'Animation Studio Web Revamp',
        companyname: 'Gimpville',
        date: 'January 2022 - Ongoing',
        projecttype: 'Design + Development',
        techstack: ['Design Prototype', 'Development', 'CMS'],
        url: '',
        repo: '',
        featuredImage: '/images/featuredimage/project-gimpville.png',
        gallery: [],
        statusComplete: false,
        objectivesCap:
            'Evolving the digital experience for an award winning Norwegian VFX and animation studio.',
        objectivesDetails:
            "The Gimpville project represents a thoughtful evolution from their original web presence. Embracing the need for a contemporary and responsive design, the new website will provide a fresh, accessible platform, showcasing the studio's portfolio with clarity and style. Focused on a user-centric experience, the redesign aims to offer intuitive navigation and a seamless interface for the graphic design team to maintain and update. While maintaining Gimpville's relaxed and professional charm, the project remains a work in progress, moving towards a flexible and modern solution that supports the studio's vision and enhances their online identity.",
        isInternal: false,
        isProfessional: true,
        awards: [],
    },
    {
        pid: '8',
        title: 'Restaurant Website Design',
        companyname: 'Side project',
        date: 'July 2021 - July 2021',
        projecttype: 'Design',
        techstack: ['Design Prototype'],
        url: 'https://www.figma.com/file/MQvmdykqa16EcXYVkQ2GG0/Thirteen-restaurant?node-id=0%3A1',
        repo: '',
        featuredImage: '/images/featuredimage/project-restaurant.png',
        gallery: [
            {
                link: '/images/gallery/restaurantthirteen/restaurant-thirteen-moodboard.png',
                id: 1,
            },
            {
                link: '/images/gallery/restaurantthirteen/restaurant-thirteen-design-mockup.png',
                id: 2,
            },
            {
                link: '/images/gallery/restaurantthirteen/restaurant-thirteen-drinks-mockup.png',
                id: 3,
            },
            {
                link: '/images/gallery/restaurantthirteen/restaurant-thirteen-menu-mockup.png',
                id: 4,
            },
            {
                link: '/images/gallery/restaurantthirteen/restaurant-thirteen-some-mockup.png',
                id: 5,
            },
        ],
        statusComplete: true,
        objectivesCap:
            'For the restaurant website, the main objective was to create an engaging design that showcases the beautiful imagery; capturing the users eyes and hunger for elevated foods and an equal impression of an exclusive experience.',
        objectivesDetails:
            'From desktop to mobile, each page was all about engaging the user. The main challenges were making sure that the images were not throwing off the user, or the aesthetics leaving the user confused and exiting before reaching their goal. Showcasing the images and tying together an elevated feel of aesthetics all at the same time of having a simple direction for the user was my ultimate task.',
        isInternal: false,
        isProfessional: false,
        awards: [],
    },
    {
        pid: '9',
        title: 'Curated Hotels Booking Website',
        companyname: 'School Project',
        date: 'April 2022 - June 2022',
        projecttype: 'Design + Development',
        techstack: [
            'Next.Js',
            'JavaScript',
            'Strapi',
            'Heroku',
            'Styled-Components',
        ],
        url: 'https://holidazefortheurbantraveler.netlify.app/',
        repo: 'https://github.com/frontendjess/jessica-hotels-exam-project-nextjs',
        featuredImage: '/images/featuredimage/project-holidaze.png',
        gallery: [
            {
                link: '/images/gallery/semesterproject-hotel/hotelsnextjs-moodboard.png',
                id: 1,
            },
            {
                link: '/images/gallery/semesterproject-hotel/hotelsnextjs-branding.png',
                id: 2,
            },
            {
                link: '/images/gallery/semesterproject-hotel/hotelsnextjs-details.png',
                id: 3,
            },
            {
                link: '/images/gallery/semesterproject-hotel/hotelsnextjs-specifichotel.png',
                id: 4,
            },
            {
                link: '/images/gallery/semesterproject-hotel/hotelsnextjs-admin.png',
                id: 5,
            },
        ],
        statusComplete: true,
        objectivesCap:
            "A case study to make a hotel booking website. Concept: Curated collection of hotels for the urban traveler. Merging the golden era of travel with today's innovation, sustainability, authenticity and comfort.",
        objectivesDetails:
            'Goal: To take the skills learned over the last 2 years and take on an extensive project where the finished product should reflect our general development capabilities, in addition to visual and technical skills. Website is fully responsive. There are both visitor section and admin section. - An achievement I am proud of is winning the Noroff Gullegget Årets Student 2022, my projects and dedication to my studies was recognized and awarded.',
        isInternal: false,
        isProfessional: false,
        awards: ['Noroff Gullegget Årets Student 2022'],
    },
    {
        pid: '10',
        title: 'E-commerce Interior Shop',
        companyname: 'School Project',
        date: 'November 2021 - December 2021',
        projecttype: 'Design + Development',
        techstack: ['HTML', 'SCSS', 'Bootstrap', 'JavaScript', 'Strapi'],
        url: 'https://interior-shop.netlify.app/',
        repo: 'https://github.com/Noroff-Fagskole/semester-project-frontendjess',
        featuredImage: '/images/featuredimage/project-interior.png',
        gallery: [
            {
                link: '/images/gallery/semesterproject-interiorshop/interiorshop-colorpalette.png',
                id: 1,
            },
            {
                link: '/images/gallery/semesterproject-interiorshop/interiorshop-moodboard.png',
                id: 2,
            },
            {
                link: '/images/gallery/semesterproject-interiorshop/interiorshop-styleguide.png',
                id: 3,
            },
            {
                link: '/images/gallery/semesterproject-interiorshop/interiorshop-mockup.png',
                id: 4,
            },
            {
                link: '/images/gallery/semesterproject-interiorshop/interiorshop-dashboard.png',
                id: 5,
            },
        ],
        statusComplete: true,
        objectivesCap:
            'One of my more recent school projects; tasked with creating an e-commerce website using tech we have learned so far. Main objectives were ensuring a good user experience, UX/UI design while following today`s trends and design patterns.',
        objectivesDetails:
            'Inspired by the raw natural beauty of southern California, the simplistic and high quality design of Scandinavia; I created an interior design shop website. The UX design and branding process was exciting and I used my favorite design tool Figma to create my style guides and prototypes. I used HTML, SCSS, Bootstrap and a headless CMS Strapi for my API.',
        isInternal: false,
        isProfessional: false,
        awards: [],
    },
]

export default listOfProjects
