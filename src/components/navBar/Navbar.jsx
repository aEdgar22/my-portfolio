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

  return (
    <NavBarStyled>
      <a className="nav__logo" href="index.html">
        Edgar Dev
      </a>

      <NavMenuStyled open={toggle}>
        <NavListStyled>
          <NavItem text="Home" Icon={AiOutlineHome} />
          <NavItem text="About" Icon={AiOutlineUser} />
          <NavItem text="Portfolio" Icon={AiOutlineFolderOpen} />
          <NavItem text="Skills" Icon={AiOutlineFileText} />
          <NavItem text="Contact" Icon={AiOutlineSend} />
        </NavListStyled>
        <AiOutlineClose className="nav__close" onClick={() => showMenu(!toggle)}/>
      </NavMenuStyled>

      <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
        <AiOutlineAppstore />
      </div>
    </NavBarStyled>
  );
};

export default Navbar;
