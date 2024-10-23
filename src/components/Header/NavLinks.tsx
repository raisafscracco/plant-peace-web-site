import { NavLink } from "react-router-dom";


const NavLinks = () => {
    return (
        <>
          <NavLink to="/" className="hover:text-header-green-hover transition duration-200 ease-in-out hover:transform hover:scale-105 text-center font-raleway text-primaryText">Home</NavLink>
          <NavLink to="/plant-registration" className="hover:text-header-green-hover transition duration-200 ease-in-out hover:transform hover:scale-105 text-center font-raleway text-primaryText">Register</NavLink>
          <NavLink to="/products-page" className="hover:text-header-green-hover transition duration-200 ease-in-out hover:transform hover:scale-105 text-center font-raleway text-primaryText">Products</NavLink>
          <NavLink to="/about-us" className="hover:text-header-green-hover transition duration-200 ease-in-out hover:transform hover:scale-105 text-center font-raleway text-primaryText">About us</NavLink>
        </>
      )
  }

  export default NavLinks