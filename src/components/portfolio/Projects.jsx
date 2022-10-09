import { ProjectsCard } from "./portfolioStyles";

export const Projects = ({ title, description, img }) => {
  return (
    <ProjectsCard>
      <div className="project__img-container">
        <img src={img} alt="img-card-project" className="project__img" />
      </div>

      <div className="project__data-container">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </ProjectsCard>
  );
};
