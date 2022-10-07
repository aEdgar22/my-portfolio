import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html{
    scroll-behavior: smooth;
}

body {

    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.textColor};


}

a{
    text-decoration: none;
    /* color: ${({ theme }) => theme.colors.textColor}; */
  
}

ul{
    list-style: none;
}

img{
    max-width: 100%;
    height: auto;
}



.grid{
    display: grid;
    gap: 1.5rem;
}

`;
