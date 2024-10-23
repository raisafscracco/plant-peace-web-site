
import Nav from "./Nav";
import HeaderLogo from "../../assets/img/HeaderImg/header-logo.svg"

import { UserButton } from "@clerk/clerk-react";


const Header = () => {
  return (
    <header className="bg-header-green z-[20] w-full">
      <div className="mx-auto flex h-89 items-center justify-between w-full px-6  md:px-100">
        <img src={HeaderLogo} alt="Planta Vase" />
          <Nav />
          <div className="hidden md:block">
           <UserButton />
          </div>

      </div>
    </header>
  );
};

export default Header;
