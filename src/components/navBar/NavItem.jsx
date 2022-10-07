import React from 'react'

export const NavItem = ({children, href}) => {
  return (
    <>
        <li>
            <a href={href} className="nav__link" >
              {children}
              {/* <Icon className='nav__link-icon' /> {text} */}
            </a>
          </li>
    </>
  )
}
