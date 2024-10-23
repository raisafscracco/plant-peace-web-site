import { Link } from "react-router-dom";
import styles from "./CardPlant.module.css";

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

export const CardPlant = ({
  data,
  inSale = false,
}: {
  data: Plant;
  inSale: boolean;
}) => {
  const { name, id, imgUrl, price, label, isInSale, discountPercentage } = data;
  const priceWithoutSymbol: number = parseFloat(price.replace("$", ""));
  const discountPrice: number =
    priceWithoutSymbol - priceWithoutSymbol * (discountPercentage / 100);
  return (
    <Link to={`/product/${id}`}>
      <div className={styles.CardCody}>
        <img src={imgUrl} />
        <article className={styles.boxCard}>
          <h1 className={styles.NamePlant}>{name}</h1>
          <div>
            {isInSale && inSale && (
              <span className={styles.PricePlantDescont}>{'$'}{discountPrice.toFixed(2)}</span>
            )}
            <span
              className={
                isInSale && inSale ? styles.PricePlant : styles.PricePlantNotInSale
              }
            >
              {price}
            </span>
          </div>
          <div className={styles.boxLabel}>
            {label &&
              label.map((label) => (
                <div className={styles.Label} key={label}>
                  <p>{label}</p>
                </div>
              ))}
          </div>
        </article>
      </div>
    </Link>
  );
};
