import styled from "styled-components";

import homeImg from "../../assets/about2.jpg";

export const HomeSectionStyled = styled.section`
  padding: 6rem 0;
  height: 100vh;

  @media screen and (max-width: 992px) {
    padding: 8rem;
  }

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const HomeContainer = styled.div`
  row-gap: 8rem;

  .home__content {
    grid-template-columns: 116px repeat(2, 1fr);
    padding-top: 5.5rem;
    column-gap: 3rem;
    align-items: center;
  }

  .home__scroll {
    margin-left: 9.25rem;
    .scroll__name {
      color: ${({ theme }) => theme.colors.titleColor};
      font-weight: ${({ theme }) => theme.fontWeights.fontNormal};
      margin-right: 0.25rem;
      margin-left: 2px;
    }

    .home__scroll-arrow {
      font-size: 1.25rem;
      color: ${({ theme }) => theme.colors.titleColor};
    }
  }

  .wheel {
    animation: scroll 2s ease infinite;
  }

  @keyframes scroll {
    0% {
      transform: translateY(0);
    }

    30% {
      transform: translateY(0.5rem);
    }
  }

  @media screen and (max-width: 992px) {
    .home__content {
      grid-template-columns: 100px repeat(2, 1fr);
      column-gap: 1.25rem;
    }

    .home__scroll {
      margin-left: 7.5rem;
    }
  }

  @media screen and (max-width: 768px) {
    .home__content {
      grid-template-columns: 0.5fr 3fr;
      padding-top: 3.5rem;
    }

    .home__scroll {
      display: none;
    }
  }
`;

export const HomeSocialContainer = styled.div`
  display: grid;
  grid-template-columns: max-content;
  row-gap: 1rem;

  .home__social-icon {
    align-content: center;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.titleColor};
    transition: background-color 0.5s ease;
  }
`;

export const HomeDataContainer = styled.div`
  .home__title {
    font-size: ${({ theme }) => theme.sizes.bigFontSize};
    margin-bottom: 1rem;
  }
  .home__hand {
    width: 35px;
    height: 35px;
    margin-left: 0.4rem;
  }

  .home__subtitle {
    position: relative;
    font-size: ${({ theme }) => theme.sizes.h2FontSize};
    padding-left: 5.4rem;
    font-weight: ${({ theme }) => theme.fontWeights.fontNormal};
    margin-bottom: 2rem;

    &::before {
      content: "";
      position: absolute;
      top: 1rem;
      left: 0;
      width: 70px;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.textColor};
    }
  }

  .home__description {
    max-width: 400px;
    margin-bottom: 3rem;
    font-size: ${({ theme }) => theme.sizes.h3FontSize};
  }
  @media screen and (max-width: 992px) {
    .home__title {
      font-size: ${({ theme }) => theme.sizes.h1FontSize};
      margin-bottom: 1rem;
    }

    .home__subtitle {
      padding-left: 3.75rem;
      margin-bottom: 1rem;
      font-size: ${({ theme }) => theme.sizes.h3FontSize};

      &::before {
        width: 42px;
        top: 0.8rem;
      }
    }

    .home__hand {
      width: 28px;
      height: 28px;
      margin-left: 0.4rem;
    }

    .home__description {
      max-width: initial;
      margin-bottom: 2.5rem;
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 768px) {
    grid-column: 1/3;

    .home__title {
      text-align: center;
    }
  }
`;

export const HomeImg = styled.div`
  background: url(${homeImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 400px;
  height: 400px;
  box-shadow: inset 0 0 0 9px rgba(255 255 255 / 30%);
  order: 1;
  justify-self: center;
  animation: profile__animate 8s ease-in-out infinite 1s;

  @keyframes profile__animate {
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }
    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
  }

  @media screen and (max-width: 992px) {
    width: 250px;
    height: 250px;
    box-shadow: inset 0 0 0 8px rgba(255 255 255 / 30%);
  }

  @media screen and (max-width: 768px) {
    order: initial;
    justify-self: initial;
    width: 250px;
    height: 250px;
    box-shadow: inset 0 0 0 6px rgba(255 255 255 / 30%);
  }

  @media screen and (max-width: 350px) {
    width: 180px;
    height: 180px;
  }
`;
