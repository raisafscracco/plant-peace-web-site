import styles from "./Login.module.css";
import rigthPlant from "../../assets/img/Login/right plant.svg";
import leftPlant from "../../assets/img/Login/left plant.svg";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";

const LoginPage = () => {
  const navigate = useNavigate();
  const {isLoaded, isSignedIn} = useAuth() 

  useEffect(() => {
    if (isLoaded && isSignedIn ){
      navigate('/')
    }
  }, [isLoaded,isSignedIn]);
  return (
    <div>
      <Header />
      <div className={styles.body}>
        <img src={rigthPlant} alt="a plant" className={styles.rightPlant}></img>
        <section className={styles.sec}>
          <h1 className={styles.error}>Welcome!</h1>
          <span className={styles.text}>Discover Your <span className={styles.diffColor}>Green</span> Side</span>
          
          <Button
            onClick={() => {
              navigate("/auth/signin");
            }}
          >
            Login
          </Button>
          <div className={styles.footerBody}></div>
        </section>
        <img src={leftPlant} alt="a plant" className={styles.leftPlant}></img>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
