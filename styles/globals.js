import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

const GlobalStyle = createGlobalStyle`
    :root {
        --font-body: 'Roboto', sans-serif;
        --font-headings: 'Roboto', sans-serif;
        --font-secondary-headings: 'brittanysignature', cursive;

        /* FONT SIZES */
        --font-size-base: 16px;
        --font-size-xxs: 0.296rem;
        --font-size-xs: 0.444rem;
        --font-size-sm: 0.667rem;
        --font-size: 1rem;
        --font-size-md: 1.5rem;
        --font-size-lg: 2.25rem;
        --font-size-xl: 3.375rem;
        --font-size-xxl: 5.063rem;
        --font-size-huge: 7.594rem;
        --font-size-jumbo: 11.391rem;

        /* LETTER SPACING */
        --letter-spacing-sm: 0.066rem;
        --letter-spacing-size: 0.1rem;
        --letter-spacing-md: 0.15rem;
        --letter-spacing-lg: 0.225rem;
        --letter-spacing-xl: 0.337rem;
        --letter-spacing-xxl: 0.506rem;
        --letter-spacing-huge: 0.759rem;
        --letter-spacing-jumbo: 1.139rem;

        /* LINE HEIGHT */
        --line-height-size: 25.6px;
        --line-height-md: 38.4px;
        --line-height-lg: 57.6px;
        --line-height-xl: 86.4px;
        --line-height-xxl: 129.6px;
        --line-height-huge: 194.4px;
        --line-height-jumbo: 291.6px;

        /* FONT WEIGHT */
        --font-weight-reg: 400;
        --font-weight-bold: 700;

        /* DESKTOP HEADINGS */
        --h1-size: 7.594rem;
        --h2-size: 5.063rem;
        --h3-size: 3.375rem;
        --h4-size: 2.25rem;
        --h5-size: 1.5rem;
        --h6-size: 1.25rem;

        /* MOBILE HEADINGS */
        --h1-mobile-size: 5.063rem;
        --h2-mobile-size: 3.375rem;
        --h3-mobile-size: 2.25rem;
        --h4-mobile-size: 1.5rem;
        --h5-mobile-size: 1.25rem;
        --h6-mobile-size: 1rem;

        /* SPACING */
        --size-xxs: 4px;
        --size-xs: 7px;
        --size-sm: 11px;
        --size: 16px;
        --size-md: 24px;
        --size-lg: 36px;
        --size-xl: 54px;
        --size-xxl: 81px;
        --size-huge: 121px;
        --size-jumbo: 182px;

        /* COLORS */
        --color-black: #121212;
        --color-white: #ffffff;
        --color-primary: #121212;
        --color-secondary: #f82586;
        --color-tertiary: #787878;
    }

    @font-face {
        font-family: 'brittanysignature';
        src: url('../fonts/brittanysignature-webfont.woff2') format('woff2'),
             url('../fonts/brittanysignature-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

  
    html,
    body {
        font-size: 16px;
        font-family: 'Roboto',

    }

    body {
        overflow-x: hidden;
    }

    ::-moz-selection { 
        background: var(--color-secondary);
      }
      
      ::selection {
        background: var(--color-secondary);
      }

    img {
        max-width: 100%;
    }

    a {
        font-family: var(--font-headings);
        text-decoration: none;
        color: var(--color-black);


        &:hover {
        background-color: var(--color-black);
        color: var(--color-white);
        }
    }

    p {
        font-family: var(--font-body);
        font-size: var(--font-size);
        letter-spacing: var(--letter-spacing-size);
        line-height: var(--line-height-size);
    }

    h1 {
        font-family: var(--font-headings);
        font-size: var(--h1-size);
        letter-spacing: var(--letter-spacing-huge);
        line-height: var(--line-height-huge);

        ${media.lessThan('medium')`
            font-size: var(--h2-size);
            letter-spacing: var(--letter-spacing-xxl);
            line-height: var(--line-height-xxl);
        `}

        ${media.lessThan('small')`
            font-size: var(--h3-size);
            letter-spacing: var(--letter-spacing-xl);
            line-height: var(--line-height-xl);
        `}
    }


    .bold {
        font-weight: var(--font-weight-bold);
    }

    .italic {
        font-style: italic;
    }

    .important-text {
        font-style: italic;
        font-weight: var(--font-weight-bold);
        color: var(--color-secondary);
    }
    
    .secondary-text-color {
        color: var(--color-secondary);
    }

    .tertiary-text-color {
        color: var(--color-tertiary);
    }

    /* MARGINS AND PADDINGS */
    .section {
        padding: 100px 0;
    }

    .section-padding-top {
        padding-top: 100px;
    }

    .section-padding-btm {
        padding-bottom: 100px;
    }

    .inner-content-padding {
        padding: 50px 0;
    }

    .inner-content-padding-btm {
        padding-bottom: 50px;
    }

    .inner-content-padding-sm-btm {
        padding-bottom: 25px;
    }

    /* ICONS */
    .navbar-email-icon {
        &:hover {
            background-color: var(--color-black);
            padding-bottom: 0.5rem;
            cursor: pointer;
        }
    }

    .times-icon {
        color: var(--color-black);
    }

    /* LINKS */

    .logo-link {
            &:hover {
                background-color: transparent;
            }
    }

    .link {
        cursor: pointer;
    }

    .project-link {
        padding: 25px 0;
        font-size: var(--h4-size);
        letter-spacing: var(--letter-spacing-lg);
        font-weight: var(--font-weight-bold);
        text-decoration: none;
        &:hover {
            background-color: var(--color-black);
            color: var(--color-white);
        }
    }

    .projects-text-link {
        font-size: var(--h5-size);
        letter-spacing: var(--letter-spacing-md);
        
        &:hover {
            color: var(--color-white);
            background-color: var(--color-black);
        }
    }

    .projects-text-link-secondary {
        font-size: var(--h3-size);
        letter-spacing: var(--letter-spacing-lg);
        color: var(--color-secondary);
        text-transform: uppercase;
    
        
        &:hover {
            color: var(--color-white);
            background-color: var(--color-black);
        }
    }

    .tell-me-more {
        &:hover {
            cursor: pointer;
        }
    }

    /* RECENT WORK PAGE */

    .project-type-text {
        font-style: italic;
        color: var(--color-tertiary)
    }

    .projects-row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 100px 100px;
    }

    .projects-col-star {
        padding-right: 100px;
    }

    /* ALL PROJECTS PAGE */
    .all-projects-container {
        display: flex;
        flex-wrap: wrap;
        row-gap: 100px;
        column-gap: 100px;
        justify-content: space-between;
        align-items: space-between;
    }
 
    .all-projects-col {
        flex: 1 0 45%;

        img {
            min-width: 100%;
        }
 

        ${media.lessThan('large')`
            flex: 0 0 100%;
        `}
    }

    .all-projects-title {
        font-size: var(--h4-size);
        letter-spacing: var(--letter-spacing-lg);
        line-height: var(--line-height-lg);
        font-weight: var(--font-weight-bold);
        color: var(--color-black);

        ${media.lessThan('small')`
            font-size: var(--h5-size);
            line-height: var(--line-height-md);
            letter-spacing: var(--letter-spacing-md);
        `}
    }

    .all-projects-techstack {
        font-family: var(--font-headings);
        font-size: var(--h4-size);
        letter-spacing: var(--letter-spacing-lg);
        line-height: var(--line-height-lg);
        font-weight: var(--font-weight-bold);
        color: var(--color-tertiary);

        ${media.lessThan('small')`
            font-size: var(--h5-size);
            line-height: var(--line-height-md);
            letter-spacing: var(--letter-spacing-md);
        `}
    }

    .all-projects-link {
        font-size: var(--h4-size);
        letter-spacing: var(--letter-spacing-lg);
        line-height: var(--line-height-lg);
        font-weight: var(--font-weight-bold);
        color: var(--color-secondary);
        text-transform: uppercase;
        
        ${media.lessThan('small')`
            font-size: var(--h5-size);
            line-height: var(--line-height-md);
            letter-spacing: var(--letter-spacing-md);
        `}
    }

    /* MARQUEE */
    
    .marquee {
        width: 100%;
        border-top: 1px solid var(--color-black);
        border-bottom: 1px solid var(--color-black);
        padding: 81px 0;
        text-align: center;
        overflow: hidden;

        ${media.lessThan('medium')`
            padding: 54px 0;
    `}
      }
 
      .marquee .marquee-wrapper {
        width: 50000px;
        animation: marqueeAnimation 38s linear 0s infinite running;
      }

      .marquee h2 .marquee-title {
        margin-right: 0px;
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .marquee-font {
        font-family: var(--font-body);
        font-size: var(--font-size-xxl);
        font-weight: var(--font-weight-bold);
        letter-spacing: var(--letter-spacing-xxl);
        text-transform: uppercase;

        ${media.lessThan('medium')`
            font-size: var(--font-size-xl);
            letter-spacing: var(--letter-spacing-xl);
        `}
      }

      @keyframes marqueeAnimation {
        100% {
          transform: translateX(-4000px);
        }
      }
    
`;

export default GlobalStyle;
