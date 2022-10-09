import styled from "styled-components";

export const AboutStyled = styled.section`
  padding: 2rem;
  
`;

export const AboutContainer = styled.div`
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  column-gap: 6rem;
  padding-top: 2.5rem;

  .about__img {
    width: 400px;
    border-radius: 10px;
    justify-self: center;
  }

  .about__description {
    padding: 0 4rem 0 0;
    margin-bottom: 2.5rem;
    font-size: clamp(1.2rem, 1.2vw, 2rem); 
  }

  @media screen and (max-width: 998px) {
    grid-template-columns: 1fr;
    row-gap: 2.5rem;

    .about__img {
      width: 300px;
    }

    .about__data {
      text-align: center;
    }

    .about__description {
      padding: 0 3rem;
      margin-bottom: 2rem;
    }
  }
  @media screen and (max-width: 576px) {
    .about__description {
      padding: 0;
    }
  }
  @media screen and (max-width: 350px) {
  }
`;
/* 
export const InfoStyled = styled.div``; */
