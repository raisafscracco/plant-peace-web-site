import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../utils/axios/api";
import { useEffect, useState } from "react";
import styles from './Product.module.css';
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

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

export const Product = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState<Plant | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  
  const getProduct = async () => {
    try {
      const { data } = await api.get(`/plants/${id}`);
      setProduct(data);
    } catch (error) {
      console.error("Failed to fetch product", error);
      // Handle the error appropriately in your application
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const { name, subtitle, label, price, features, description, imgUrl, isInSale, discountPercentage } = product;
  const priceWithoutSymbol: number = parseFloat(price.replace("$", ""));
  const discountPrice: number =
    priceWithoutSymbol - priceWithoutSymbol * (discountPercentage / 100);

  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.boxInfo}>
        <div className={styles.boxImg}>
          <img src={imgUrl} alt={name} />
        </div>
        <div className={styles.boxInfoText}>
          <h1 className={styles.title}>{name}</h1>
          <strong className={styles.subtitle}>{subtitle}</strong>
          <div className={styles.boxLabel}>
            {label && label.map((labelItem) => (
              <div className={styles.Label} key={labelItem}>
                <p>{labelItem}</p>
              </div>
            ))}
          </div>
          <div>
            {isInSale && discountPercentage > 0 ? (
              <>
                <span className={styles.PricePlantDescont}>{'$'}{discountPrice.toFixed(2)}</span>
                <span className={styles.PricePlantNotInSale}>{price}</span>
              </>
            ) : (
              <span className={styles.PricePlant}>{price}</span>
            )}
          </div>

          <div className={styles.button}>
            <Button onClick={() => navigate('/error')}>
              Check out
            </Button>
          </div>

          <div>
            <span className={styles.span}>Features</span>
          </div>
          <p className={styles.text}>{features}</p>
          <span className={styles.span}>Description</span>
          <p className={styles.text}>{description}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
