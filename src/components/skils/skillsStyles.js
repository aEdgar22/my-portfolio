import styled from "styled-components";

export const SkillsStyled = styled.section`
  padding: 10rem 0 2rem 0;

  .skills__container {
    padding-top: 3rem;
  }

  .skills__content {
    border: 2px solid ${({ theme }) => theme.colors.cardDataColor};
    padding: 2rem;
    border-radius: 1.25rem;
    background-color: #fff;

    .skills__title {
      font-size: ${({ theme }) => theme.sizes.normalFontSize};
      font-weight: ${({ theme }) => theme.fontWeights.fontMedium};
      text-align: center;
      margin-bottom: 1.5rem;
    }

    .skills__box {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      column-gap: 2.5rem;

      .skills__data {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
      }
    }
  }

  .skills__container {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 4rem;
    justify-content: center;

    @media screen and (max-width: 576px) {
      grid-template-columns: repeat(1, 80%);

    }
  }

  /* 
  .skills__data{
    display: flex;
    align-items: center;

    .skill__name{
    color: ${({ theme }) => theme.colors.titleColor};

    }
  } */
`;
