import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './home.module.css';

const Product = ({ id, img, name, price }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.product} onClick={() => navigate(`/product/${id}`)}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={img} alt={name} />
      </div>
      <div>
        <p aria-label='product name' className={styles.productName}>{name}</p>
        <p aria-label='product price' className={styles.productPrice}>R{price.toFixed(2)}</p>
      </div>
    </div>
  )
}

Product.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default Product;
