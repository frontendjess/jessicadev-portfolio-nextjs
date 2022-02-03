import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

const GlobalStyle = createGlobalStyle`
    :root {
        --font-body: 'Roboto', sans-serif;
        --font-headings: 'Roboto', sans-serif;

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

    
`;

export default GlobalStyle;
