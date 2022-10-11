import { NavBarStyled, NavListStyled, NavMenuStyled } from "./navBarStyles";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFolderOpen,
  AiOutlineFileText,
  AiOutlineClose,
  AiOutlineSend,
  AiOutlineAppstore,
} from "react-icons/ai";
import { NavItem } from "./NavItem";
import { useState } from "react";

const Navbar = () => {
  const [toggle, showMenu] = useState(false);

  const [navActive, setNavActive] = useState(false);

  const activeNav = () => {
    if(window.scrollY >= 80) {
      setNavActive(true);
    }else{
      setNavActive(false);
    }
  }

  window.addEventListener("scroll",activeNav)

  return (
    <NavBarStyled className={navActive ? 'nav-active' : ''}>
      <a className="nav__logo" href="/">
        Edgar Dev
      </a>

      <NavMenuStyled open={toggle}>
        <NavListStyled>
          <NavItem href="#home">
            <AiOutlineHome className="nav__link-icon" />
            Home
          </NavItem>

          <NavItem href="#about">
            <AiOutlineUser className="nav__link-icon" />
            About
          </NavItem>

          <NavItem href="#portfolio">
            <AiOutlineFolderOpen className="nav__link-icon" />
            Portfolio
          </NavItem>

          <NavItem href="#skills">
            <AiOutlineFileText className="nav__link-icon" />
            Skills
          </NavItem>

          <NavItem href="#contact">
            <AiOutlineSend className="nav__link-icon" />
            Contact
          </NavItem>
        </NavListStyled>
        <AiOutlineClose
          className="nav__close"
          onClick={() => showMenu(!toggle)}
        />
      </NavMenuStyled>

      <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
        <AiOutlineAppstore />
      </div>
    </NavBarStyled>
  );
};

export default Navbar;
