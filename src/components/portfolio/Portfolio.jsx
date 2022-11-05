import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

import { data } from "../../dataProjects/data";
import { PortfolioStyled } from "./portfolioStyles";
import { useAos } from "../../hooks/useAos";

export const Portfolio = () => {
  useAos(1500);
  return (
    <PortfolioStyled id="portfolio" className="container" data-aos="fade-up">
      <h2 className="section__title">PROYECTOS</h2>

      <Swiper
        className="projects__container"
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {data.map(({ id, title, description, img, links }) => {
          return (
            <SwiperSlide key={id} className="project__card">
              <div className="project__img-container">
                <img
                  src={img}
                  alt="img-card-project"
                  className="project__img"
                />
              </div>

              <div className="project__data-container">
                <h3>{title}</h3>
                <p>{description}</p>

                <div className="project_links-container">
                  {links.github ? (
                    <a href={links.github} target="_blank" rel="noreferrer">
                      <AiOutlineGithub className="project__links-icon" />
                    </a>
                  ) : (
                    ""
                  )}

                  <a href={links.production} target="_blank" rel="noreferrer">
                    <AiOutlineLink className="project__links-icon" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </PortfolioStyled>
  );
};
