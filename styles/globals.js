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
        --font-size-xxl: 5.068rem;
        --font-size-huge: 7.594rem;
        --font-size-jumbo: 11.391rem;

        /* LETTER SPACING */
        --letter-spacing-size: 0.1rem;
        --letter-spacing-md: 0.15rem;
        --letter-spacing-lg: 0.225rem;
        --letter-spacing-jumbo: 1.139rem;

        /* FONT WEIGHT */
        --font-weight-reg: 400;
        --font-weight-bold: 700;

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

    img {
        max-width: 100%;
    }

    a {
        font-family: 'Roboto',
        text-decoration: none;
        color: #121212;
    }

    p {
        font-family: var(--font-body);
        font-size: var(--font-size);
        letter-spacing: var(--letter-spacing-size);
    }

    .secondary-text-color {
        color: var(--color-secondary);
    }

    
`;

export default GlobalStyle;
