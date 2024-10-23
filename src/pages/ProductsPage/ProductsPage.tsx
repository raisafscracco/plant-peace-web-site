import styles from './ProductsPage.module.css'
import { useEffect, useState } from "react";
import { CardPlant } from "../../components/CardPlant/CardPlant";
import { api } from "../../utils/axios/api";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


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

const ProductsPage = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.get("/plants")
      .then((response) => {
        setPlants(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
        <Header/>
        <h1 className={styles.title}>Take a look at our <span className={styles.span}>Products stock</span></h1>
        <div className={styles.Body}>
        {plants.map((plant) => (
            <CardPlant key={plant.id} data={plant} inSale={plant.isInSale} />
            ))}
        </div>
            <Footer/>
    </div>
  );
};

export default ProductsPage;
