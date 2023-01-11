import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-smooth: antialiased;
        font-family: "Nunito";
        box-sizing: border-box;
    }

    html, body {
        min-height: 100vh;
        background-color: ${({theme}) => theme.colors.base.background};
    }
`;