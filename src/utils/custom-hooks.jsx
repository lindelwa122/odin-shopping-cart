import { useEffect, useState } from 'react';
import shop from '../modules/shop/shop';

const useProductsData = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const addProductsToShop = (data) => {
    data.forEach(({ id, title, price, description, image }) => {
      shop.createProduct('shop-' + id, title, price, description, image);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const products = shop.getAllProducts();
      if (products.length === 0) {
        try {
          const response = await fetch('https://fakestoreapi.com/products');

          if (!response.ok) {
            throw new Error(
              `The request wasn't completed successfully. It returned a status of ${response.status}`,
            );
          }

          const data = await response.json();
          addProductsToShop(data);
        } catch (err) {
          setError(err);
        }
      }

      setProducts(shop.getAllProducts());
      setLoading(false);
    };

    fetchData();
  }, []);

  return { error, loading, products };
};

export { useProductsData };
