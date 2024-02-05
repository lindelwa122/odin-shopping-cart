import cache from './cache';
import product from '../product/product';
import shoppingCart from '../shopping_cart/shopping-cart';

const cartCache = () => {
  const save = () => {
    const products = shoppingCart.getProducts().map((product) => {
      return { ...product, incrementQuantity: () => {} };
    });
    cache.save(products, 'sk1-cart');
  };

  const getData = () => {
    shoppingCart.clear();
    const data = cache.getData('sk1-cart');
    data.forEach((item) => {
      const p = product(
        item.getId,
        item.getName,
        item.getPrice,
        item.getDescr,
        item.getImg,
      );

      shoppingCart.addProduct(p, item.getQuantity);
    });

    return shoppingCart.getProducts();
  };

  return { getData, save };
};

export default cartCache();
