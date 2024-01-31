import cache from './cache';
import shop from '../shop/shop';

const productsCache = () => {
  const save = () => {
    const products = shop.getAllProducts();
    cache.save(products, 'sk1-products');
  };

  const getData = () => cache.getData('sk1-products');

  return { getData, save };
};

export default productsCache();
