import { nanoid } from 'nanoid';
import { useContext } from 'react';
import Product from '../product/product';
import Navbar from '../header/navbar';
import ShopContext from '../../context';
import styles from './shop.module.css';
import homeStyles from '../home/home.module.css';

const Shop = () => {
  const { products } = useContext(ShopContext);

  const productsView = products.map((product) => (
    <Product key={nanoid()} product={product} />
  ));

  return (
    <>
      <Navbar />
      <div className={styles.heroSection}>
        <h1 className={styles.h1}>Revolutional Magic</h1>
        <p className={styles.heroPar}>
          A revolution in the world of watches. Confidence and strength in every
          meeting.
        </p>
      </div>
      <main className={styles.main}>
        <h2 className={styles.h2}>
          All Products{' '}
          <span className={styles.itemsCount}>({products.length} items)</span>
        </h2>
        <div className={homeStyles.productsView}>{productsView}</div>
      </main>
    </>
  );
};

export default Shop;
