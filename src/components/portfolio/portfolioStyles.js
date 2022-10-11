import styled from "styled-components";

export const PortfolioStyled = styled.section`
  padding: 10rem 0 2rem 0;

  .projects__container {
    padding-top: 3rem;
    width: 100%;

  }

  .project__card {
    padding: 1rem;


  }

  .project__img-container {
    width: 100%;
    height: 300px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;

    .project__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .project__data-container {
    padding: 1rem;
    border-radius: 12px;
    border: 2px solid ${({theme}) =>theme.colors.cardDataColor};
    background-color: #fff;
    .project_links-container {
      width: 100%;
      height: 4rem;
      padding:1rem .5rem;
     
    }

    .project__links-icon {
      color: ${({ theme }) => theme.colors.titleColor};
      font-weight: ${({ theme }) => theme.fontWeights.fontMedium};
      font-size: clamp(1.8rem, 2.5vw, 2rem); 
      margin-right: 2rem;
    }
  }
`;
