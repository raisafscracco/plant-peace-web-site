import styles from "./Erroe.module.css";
import rigthPlant from "./ImgError/right plant.svg";
import leftPlant from "./ImgError/left plant.svg";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header/>
    <div className={styles.body}>
      <img src={rigthPlant} alt="a plant" className={styles.rightPlant}></img>
      <section className={styles.sec}>
        <h1 className={styles.error}>404</h1>
        <span className={styles.text}>Whoops... Page not found!</span>
        <Button 
          onClick={() => {
            navigate("/");
          }}>
          Go To Home
        </Button>
        <div className={styles.footerBody}></div>
      </section>
      <img src={leftPlant} alt="a plant" className={styles.leftPlant}></img>
    </div>
    <Footer/>
    </div>
  );
};
