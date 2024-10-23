import styles from "./section1.module.css"
import { useNavigate } from "react-router-dom";
import Arrow from "../../../../assets/img/Section1Img/Arrow.svg";
import Plant from "../../../../assets/img/Section1Img/plant.png";
import Plantleft from "../../../../assets/img/Section1Img/left plant.png";
import Button from "../../../../components/Button/Button";

export const Section1 = () => {
    const navigate = useNavigate();
    return (
        <section className={styles.section1}>
            <div className={styles.introduction}>
                <div className={styles.text1}>
                    <span className={`${styles.pacifico} ${styles.cursive}`}>
                        <div className={styles.line}></div>
                        Love for nature
                    </span>
                    <h1 className={`${styles.ebgaramond} ${styles.title}`}>
                        Discover Your <span className={styles.diffColor}>Green</span> Side
                    </h1>
                    <p className={`${styles.raleway} ${styles.text}`}>
                        We are your one-stop destination for all things green and growing. Our website offers a wide array of stunning plants, ranging from vibrant flowers to lush indoor foliage, allowing you to create your very own green oasis.
                    </p>
                    <Button onClick={() => navigate('/shop')}>
                        Shop Now
                    </Button>
                </div>
                <img src={Plantleft} alt="a plant" className={styles.leftPlant} />
                <div className={styles.learn}>
                    <span className={styles.raleway}>Learn Gardening</span>
                    <img src={Arrow} alt="right arrow" />
                </div>
            </div>
            <img src={Plant} alt="vases with plants on a table" className={styles.backgroundImage} />
        </section>
    );
};