import { useEffect, useState, useRef } from "react";
import { api } from "../../utils/axios/api";
import { CardPlant } from "../CardPlant/CardPlant";
import styles from './Carousel.module.css';


interface Plant {
  id: string;
  name: string;
  subtitle: string;
  label: string[];
  price: string;
  isInSale: boolean;
  discountPercentage: number;
  features: string;
  description: string;
  imgUrl: string;
}

export const CarouselInSale = () => {
  const [data, setData] = useState<Plant[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  const containerRef = useRef<HTMLDivElement>(null);

  const getAllProducts = async () => {
    const { data } = await api.get("/plants?isInSale=true");
    setData(data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1200) {
        setItemsPerView(4);
      } else if (window.innerWidth >= 800) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 600) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);

    return () => {
      window.removeEventListener('resize', updateItemsPerView);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(data.length / itemsPerView) - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(data.length / itemsPerView) - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel} ref={containerRef}>
        <div
          className={styles.carouselInner}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {data.map((product) => (
            <div key={product.id} className={styles.carouselItem}>
              <CardPlant inSale data={product} />
            </div>
          ))}
        </div>
      </div>
      <button className={styles.carouselPrev} onClick={handlePrev}>
          {'<'}
      </button>
      <button className={styles.carouselNext} onClick={handleNext}>
          {'>'}
      </button>
    </div>
  );
};
