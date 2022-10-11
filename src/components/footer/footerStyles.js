import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100%;
  padding: 1rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.titleColor};
  color: #fff;

  @media screen and (max-width: 768px) {
      display: none;
    }
`;
