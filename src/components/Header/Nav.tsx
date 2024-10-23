
import { Menu, X } from  'lucide-react';
import { useState, useEffect } from "react";
import NavLinks from './NavLinks';
import HeaderLogo from "../../assets/img/HeaderImg/header-logo.svg"
import { UserButton } from '@clerk/clerk-react';

     
const Nav = () => {
    const [isOpen,setIsOpen] = useState<boolean>(false);

    const toggleNavbar = () => {
            setIsOpen(!isOpen);
    };

    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
        return;
      }
        document.body.style.overflow = 'visible';

    }, [isOpen])

    return (
    <> 
     <nav className=" flex justify-center">
      <div className="hidden w-full justify-between md:flex gap-4">
        <NavLinks />
      </div>
      <div className="md:hidden">
        <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu size={38} />}</button>
      </div>
     </nav>
     {isOpen && (
      
      <dialog open={isOpen} className="h-100dvh w-100vw absolute bg-mainGreen top-0 left-0 z-[999] md:hidden flex flex-col p-6 gap-8">
        <div className="flex justify-between items-center ">
          <img src={HeaderLogo} alt="Plant Vase" />
          <button onClick={toggleNavbar}>{isOpen ? <X size={32} color="black"/> : <Menu />}</button>
        </div>
          
          <div className="mx-auto">
          <UserButton/> 
          </div>

          <NavLinks />
      </dialog>
     )}
    
    </> 
    )
};     

export default Nav
      

