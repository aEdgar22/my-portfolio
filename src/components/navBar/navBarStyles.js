import styled from "styled-components";

export const NavBarStyled = styled.nav`
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  column-gap: 1rem;

  .nav__link-icon {
    display: none;
  }

  .nav__toggle,
  .nav__close {
    font-size: 24px;
    cursor: pointer;
    display: none;
    color: ${({ theme }) => theme.colors.titleColor};
    font-weight: ${({ theme }) => theme.fontWeights.fontMedium};
  }

  .nav__logo {
    font-size: clamp(16px, 3vw, 24px);
    color: ${({ theme }) => theme.colors.titleColor};
    font-weight: ${({ theme }) => theme.fontWeights.fontMedium};
  }

  @media screen and (max-width: 768px) {
    height: 3.5rem;
    justify-content: space-between;
    padding: 0 1rem;

    .nav__close,
    .nav__toggle,
    .nav__link-icon {
      display: block;
    }
  }
`;

export const NavListStyled = styled.ul`
  display: flex;
  column-gap: 3rem;

  .nav__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.colors.titleColor};
    font-weight: ${({ theme }) => theme.fontWeights.fontMedium};
    font-size: ${({ theme }) => theme.sizes.normalFontSize};
    transition: 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.titleColorDark};
    }
  }

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;

export const NavMenuStyled = styled.div`
  @media screen and (max-width: 768px) {
    position: fixed;
    bottom: ${({open}) => open ? '0' : '-100%'};
    left: 0;
    width: 100%;
    background-color: #fff;
    padding: 2rem 1.5rem 4rem;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    border-radius: 1.5rem 1.5rem 0 0;
    transition: 0.3s;

    
  }

  .nav__link-icon {
    font-size: 1.2rem;
  }

  .nav__close {
    position: absolute;
    right: 1rem;
    bottom: 1.2rem;
    font-size: 1.5rem;

    &:hover {
      color: ${({ theme }) => theme.colors.titleColorDark};
    }
  }
`;
