import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

const GlobalStyle = createGlobalStyle`
    html {
        background: #ff6699;
    }

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Roboto';
    }
    
    * {
        box-sizing: border-box;
    }

    
    ${media.greaterThan('small')`
    html {
        background: #00ccff;
    }
  `}

`;

export default GlobalStyle;
