import styled from "styled-components";

export const PortfolioStyled = styled.section`
  padding: 10rem 0 2rem 0;

  .projects__container {
    padding: 40px 0 0 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const ProjectsCard = styled.div`
  width: 350px;
  padding: 1rem;
  border: 1px solid red;
  .project__img{
    width: 300px;
    border-radius: 20px;
  }
  .project__data-container{
    border: 1px solid red;
  }
`;
