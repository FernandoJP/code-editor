import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html,
    body {
        height: 100%;
        font-size: 100%;
        line-height: 1.4;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Muli Light", sans-serif;
    }

    @font-face {
        font-family: 'Muli';
        src: local('Muli'), url(./assets/fonts/Muli/muli.regular.ttf) format('truetype');
      }
      
    @font-face {
        font-family: 'Muli Light';
        src: local('Muli'), url(./assets/fonts/Muli/muli.light-italic.ttf) format('truetype');
    }
    
    @media only screen and (min-width: 0) {
        html {
          zoom: 0.8;
        }
    }
      
    @media only screen and (min-width: 500px) {
        html {
            zoom: 0.9;
        }
    }
      
    @media only screen and (min-width: 1000px) {
        html {
            zoom: 1;
        }
    }
`

export default GlobalStyle;