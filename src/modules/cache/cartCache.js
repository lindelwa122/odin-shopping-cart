import cache from './cache';
import shoppingCart from '../shopping_cart/shopping-cart';

const cartCache = () => {
  const save = () => {
    const products = shoppingCart.getProducts();
    cache.save(products, 'sk1-cart');
  };

  const getData = () => cache.getData('sk1-cart');

  return { getData, save };
};

export default cartCache();
