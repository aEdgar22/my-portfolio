import React from 'react'
import { data } from '../../dataProjects/data';
import { PortfolioStyled } from './portfolioStyles'
import { Projects } from './Projects';


export const Portfolio = () => {
  return (
    <PortfolioStyled className='container section'>
      <h2 className='section__title'>Proyectos</h2>

      <div className='projects__container'>

        {
          data.map( d => {
            
            return <Projects key={d.id} {...d}/>
          })
        }
      </div>
    </PortfolioStyled>
  )
}
