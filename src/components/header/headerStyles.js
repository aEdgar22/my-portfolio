import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #FFF;
  .nav-active{
    box-shadow: 0 -1px 8px 1px rgba(0,0,0,0.15);
  }

  @media screen and (max-width: 768px) {
    top:initial;
    bottom: 0;
  }

`;
