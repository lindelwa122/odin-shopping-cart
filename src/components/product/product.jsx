import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Product = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/product/${product.getId()}`)}>
      <div>
        <img src={product.getImg()} alt={product.getName()} />
      </div>

      <div>
        <p aria-label='product name'>{product.getName()}</p>
        <p aria-label='product price'>R{product.getPrice()}</p>
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
