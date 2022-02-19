import { React } from "react";

import Logo from "../../images/logo.png";
import "./styles.css";

const Header = () => {
  return (
    <header className="h-16 w-full flex justify-between items-center px-8">
      <img src={Logo} className="w-20" alt="logo" />
      <a
        className="f6 link dim br-pill ph3 pv2 mb2 dib mr4 pointer customButton"
        href="#0"
      >
        Log In
      </a>
    </header>
  );
};

export default Header;
