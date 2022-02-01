import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

const GlobalStyle = createGlobalStyle`
    html {
        background: #ff6699;
    }

    
    ${media.greaterThan('small')`
    html {
        background: #00ccff;
    }
  `}

`;

export default GlobalStyle;
