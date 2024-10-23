import { Carousel } from "../../../../components/Carousel/Carousel"
import { CarouselInSale } from "../../../../components/Carousel/CarouselInSale"
import styles from './PlantsCards.module.css'


export const PlantsCars = () => {
  return (
    <div className={styles.Body}>
        <div className={styles.BoxInfo}>
        <div className={styles.BoxText}>
            <h1 className={styles.Title}>This weeks Most Popular <span className={styles.Span}> and best selling</span></h1>
        </div>
        <div className={styles.BoxCarousel}>
        <Carousel/>
        </div>
        <div className={styles.BoxText}>
        <h1 className={styles.Title}><span className={styles.Span}>Plants in</span> Sale</h1>
        </div>
        <CarouselInSale/>
        </div>
    </div>
  )
}

