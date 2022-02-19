import { React } from "react";
import Logo from "../../images/logo.png";

const Header = () => {
  return (
    <header className="h-16 w-full flex justify-between items-center px-8">
      <img src={Logo} className="w-20" alt="logo" />
      <a
        style={{
          background:
            "linear-gradient(107.04deg, #C346D5 52.6%, #501FC1 118.32%)",
          fontFamily: "OpenSansExtraBold",
        }}
        className="f6 link dim br-pill ph3 pv2 mb2 dib white mr4 pointer"
        href="#0"
      >
        Log In
      </a>
    </header>
  );
};

export default Header;
