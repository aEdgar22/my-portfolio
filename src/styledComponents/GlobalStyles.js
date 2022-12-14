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
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.textColor};
}

a{
    text-decoration: none;
}

ul{
    list-style: none;
}

.grid{
    display: grid;
    gap: 1.5rem;
}

/* .section{
    padding: 6rem 0 2rem 0;
} */

.section__title{
    font-size:clamp(2rem, 5vw, 2.5rem); 
    text-align: center;
}

.section__subtitle{
    display: block;
    font-size: ${({ theme }) => theme.sizes.smallFontSize};
    margin-bottom: 4rem;
    text-align: center;
}

.container {
    max-width: 75rem;
    margin-left: auto;
    margin-right: auto;
}

.button {
    display: inline-block;
 
    color: #fff;
    padding: 1.25rem 2rem;
    border-radius: 1rem;
    font-weight: ${({ theme }) => theme.fontWeights.fontMedium};
    background-color: ${({ theme }) => theme.colors.textColor};
    transition: .3s;
    &:hover{
        background-color: ${({ theme }) => theme.colors.titleColorDark};
    }
}
 
.button--flex{
    display: inline-flex;
    align-items: center;

}

.button__icon {
    margin-left: 0.5rem;
}

@media screen and (max-width: 1024px){
    .container{
        margin-left: 1.5rem;
        margin-right: 1.5rem;
    }

}

@media screen and (max-width: 992px) {
    .button{
        padding: 1rem 1.75rem;
    }

    .button__icon{
        width: 22px;
        height: 22px;
    }

}


@media screen and (max-width: 768px) {

    body{
        margin: 0 0 3rem 0
    }

    .section{
        padding: 8rem 0 4rem;
    }
}

@media screen and (max-width: 350px) {
    .container{
        margin-left: 1rem;
        margin-right: 1rem;
    }
}

`;
