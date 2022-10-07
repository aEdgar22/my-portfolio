import React from 'react'

export const NavItem = ({text, Icon}) => {
  return (
    <>
        <li>
            <a className="nav__link" href="#home">
              <Icon className='nav__link-icon' /> {text}
            </a>
          </li>
    </>
  )
}
