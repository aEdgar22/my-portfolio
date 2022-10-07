import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #FFF;

  @media screen and (max-width: 768px) {
    top:initial;
    bottom: 0;
  }

`;
