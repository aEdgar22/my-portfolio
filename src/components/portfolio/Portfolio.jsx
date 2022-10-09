import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import { data } from "../../dataProjects/data";
import { PortfolioStyled } from "./portfolioStyles";

export const Portfolio = () => {
  return (
    <PortfolioStyled className="container section">
      <h2 className="section__title">Proyectos</h2>

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
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {data.map(({ id, title, description, img }) => {
          return (
            <SwiperSlide key={id}>
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
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </PortfolioStyled>
  );
};
