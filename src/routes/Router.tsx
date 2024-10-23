import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Product } from "../pages/Product/Product"
import { PlantRegistration } from "../pages/Plantregistration/PlantRegistration"
import { Error } from "../pages/Error/Error"
import AboutUs from "../pages/AboutUs/AboutUs"
import { PrivateRoute } from "./components/PrivateRoute"
import { Login } from "../pages/SignIn/Login"
import LoginPage from "../pages/SignIn/LoginPage"
import ProductsPage from "../pages/ProductsPage/ProductsPage"



export const Router = () => {
  return (
    <BrowserRouter >
        <Routes>
          <Route element={<PrivateRoute/>}>
          <Route element={<Home/>} path="/"/>
          <Route element={<ProductsPage/>} path="/products-page"/>
          <Route element={<Product/>} path="/product/:id"/>
          <Route element={<PlantRegistration/>} path="/plant-registration"/>
          <Route element={<AboutUs/>} path="/about-us"/> 
          <Route element={<Error/>} path="*"/>
          </Route> 
          <Route element={<Login/>} path="/auth/signin"/>
          <Route element={<LoginPage/>} path="/auth/login-page"/>
        </Routes>
    </BrowserRouter>
  )
}


