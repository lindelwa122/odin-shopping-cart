import cache from './cache';
import shop from '../shop/shop';

const productsCache = () => {
  const save = () => {
    const products = shop.getAllProducts();
    cache.save(products, 'sk1-products');
  };

  const getData = () => {
    const products = [];
    const data = cache.getData('sk1-products');

    data.forEach((item) => {
      products.push({
        id: item.getId,
        title: item.getName,
        description: item.getDescr,
        price: item.getPrice,
        image: item.getImg,
      });
    });
    return products;
  };

  return { getData, save };
};

export default productsCache();
