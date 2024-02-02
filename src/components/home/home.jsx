import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from "../header/navbar";
import Product from './product';
import ShopContext from '../../context';
import styles from './home.module.css';
import watch1 from '../../assets/images/watch-1.jpg';
import watch2 from '../../assets/images/watch-2.jpg';
import watch3 from '../../assets/images/watch-3.jpg';

const Home = () => {
  const navigate = useNavigate();
  const { products } = useContext(ShopContext);
  const productsView = [];

  for (let i = 0; i < 6; i++) {
    const product = products[i];
    productsView.push(
      <Product 
        key={product.getId()} 
        id={product.getId()} 
        name={product.getName()} 
        img={product.getImg()} 
        price={product.getPrice()} 
      />
    )
  }

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <h1 className={styles.heading}>Revolutional Collection</h1>
          <p className={styles.p}>A revolution in the world of watches. Confidence and strength in every meeting.</p>
          <button 
            className={styles.btn}
            onClick={() => navigate('/shop')}>
              Discover the collection
          </button>
        </section>

        <section className={styles.slogan}>
          <h2 className={styles.h2}>Where science meets magic</h2>
          <hr className={styles.hr} />
          <p>And let the clock stop</p>
        </section>

        <section className={styles.productsSection}>
          <div className={styles.productsView}>{productsView}</div>
          <div className={styles.btnWrapper}>
            <button 
              className={styles.btn2}
              onClick={() => navigate('/shop')}>
                Load More
            </button>
          </div>
        </section>

        <section className={styles.extraInfo}>
          <div className={styles.extraInfoText}>
            <p className={styles.largeFontSize}>We believe that when you surround yourself with the things and the people you love, you find beauty in every moment and make memories that shape your story. Since 1984, we&apos;ve been inspired by American creativity and ingenuity.</p>
          </div>

          <div className={`${styles.extraInfoText} ${styles.rightAligned}`}>
            <p>Our goal is to bring life to the industy by making quality, fashionable pieces. We are authentic to our roots and creative in our style. We our optimistic in our spirit and generous in our joy.</p>

            <p>Our goal is to bring life to the industry by making quality, fashionable pieces. We are authentic to our roots.</p>
          </div>

          <div className={styles.extraInfoImgWrapper}>
            <img className={styles.extraInfoImg} src={watch1} alt='' />
          </div>

          <div className={`${styles.extraInfoText} ${styles.rightAligned}`}>
            <h3 className={styles.h3}>MARCH LA.B</h3>
            <p>Lady Mansart Emerald 26mm</p>
            <p>Name after Mansart&apos;s Castles, the Lady Mansart Emerald 26mm timepiece from MARCH LA.B is characteries by a square case that takes after the architecture of La Place Vendome.</p>
            <p>Made in France</p>
            <hr />
            <div className={styles.watchDescr}>
              <div>
                <h4 className={styles.h4}>Composition</h4>
                <p>Gold Tone Alloy, Glass</p>
              </div>
              <div>
                <h4 className={styles.h4}>Wearing</h4>
                <p>The model is 5 ft 10 in wearing size OS</p>
              </div>
            </div>
            <div className={styles.extraInfoImgWrapper2}>
              <img className={styles.extraInfoImg} src={watch2} alt='' />
            </div>
          </div>

          <div className={styles.extraInfoText}>
            <h3 className={styles.h3}>VERSACE</h3>
            <p>La Medusa 38mm</p>
            <p>Versace&apos;s Medusa Head motif is brand signature, found throughtout ready-to-wear accessories and even smaller treasures like its watch collection. This La Medusa 38mm is a fine demonstration, presenting a two-tone dial that is accented with a large Medusa Head motif across the front and a Roman numeral bezel.</p>
            <button 
              className={styles.btn}
              onClick={() => navigate('/shop')}>
                Discover the collection
            </button>
          </div>

          <div className={`${styles.extraInfoWrapper} ${styles.extraInfoText} ${styles.rightAligned}`}>
            <img className={styles.extraInfoImg} src={watch3} alt='' />
          </div>
        </section>
      </main>
    </>
  )
};

export default Home;
