import { useEffect, useState } from 'react';
import productsCache from '../modules/cache/productsCache';
import shop from '../modules/shop/shop';

const addProductsToShop = (data) => {
  // Ensure shop is empty before adding any products
  shop.clearShop();

  data.forEach(({ id, title, price, description, image }) => {
    shop.createProduct(id.toString(), title, price, description, image);
  });

  productsCache.save();
};

const useProductsData = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const products = productsCache.getData();

      if (products.length === 0) {
        try {
          const response = await fetch('https://fakestoreapi.com/products');

          if (!response.ok) {
            throw new Error(
              `The request wasn't completed successfully. It returned a status of ${response.status}`,
            );
          }

          const data = await response.json();
          const newData = data.map((product) => ({
            ...product,
            price: product.price * 18,
          }));
          addProductsToShop(newData);
        } catch (err) {
          setError(err);
        }
      } else {
        addProductsToShop(products);
      }

      setProducts(shop.getAllProducts());
      setLoading(false);
    };

    fetchData();
  }, []);

  return { error, loading, products };
};

export { useProductsData };
