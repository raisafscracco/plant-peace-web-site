
import { PlantsSteps } from "./components/PlantsSteps/PlantsSteps"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { PlantsCars } from "./components/PlansCards/PlantsCars"
import { Section1 } from "./components/Section1/Section1"




export const Home = () => {
  
  return (
    <div>
      <Header/>
      <Section1 />
      <PlantsSteps/>
      <PlantsCars/>
      <Footer/>
    </div>
  )
}


