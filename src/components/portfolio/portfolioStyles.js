import styled from "styled-components";

export const PortfolioStyled = styled.section`
  padding: 10rem 0 2rem 0;
  border: 1px solid red;

  .projects__container{
    padding-top: 3rem;
  }

  .project__img-container{
    border: 1px solid blue;
    width: 100%;
    height: 300px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;

    .project__img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .project__data-container{
    border: 1px solid green;
  margin-top: 2rem;
    padding: 2rem;
    border-radius: 12px;
  }
  }
 
/*   
  .projects__container {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: -webkit-transform;
    transition-property: transform;
    transition-property: transform,-webkit-transform;
    box-sizing: content-box;
  } */
`;

