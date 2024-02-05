import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../home/home.module.css';

const Product = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.product}
      onClick={() => navigate(`/product/${product.getId()}`)}
    >
      <div className={styles.imgWrapper}>
        <img
          className={styles.img}
          src={product.getImg()}
          alt={product.getName()}
        />
      </div>

      <div>
        <p aria-label="product name" className={styles.productName}>
          {product.getName()}
        </p>
        <p aria-label="product price" className={styles.productPrice}>
          R{product.getPrice().toFixed(2)}
        </p>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.exact({
    getId: PropTypes.func.isRequired,
    getName: PropTypes.func.isRequired,
    getPrice: PropTypes.func.isRequired,
    getDescr: PropTypes.func.isRequired,
    getImg: PropTypes.func.isRequired,
  }).isRequired,
};

export default Product;
