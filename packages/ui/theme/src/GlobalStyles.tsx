import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
    }

    html, body {
        height: 100%;
    }   

    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    input, button, textarea, select {
        font: inherit;
    }

    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }

    #root {
        isolation: isolate;
    }

    .visually-hidden {
        display: inline-block;
        position: absolute;
        overflow: hidden;
        clip: rect(0 0 0 0);
        height: 1;
        width: 1;
        margin: -1;
        padding: 0;
        border: 0;
    }
`;
