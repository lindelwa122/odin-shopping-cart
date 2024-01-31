import { useState } from 'react';

import { useProductsData } from './utils/custom-hooks';
import Router from './router';
import shoppingCart from './modules/shopping_cart/shopping-cart';
import ShopContext from './context';

const App = () => {
  const { error, loading, products } = useProductsData();
  const [cart, setCart] = useState([]);

  if (error) {
    console.log(error);
    return <h1>There was an error</h1>
  }

  if (loading) return <h1>Loading...</h1>

  const addToCart = (product) => {
    const added = shoppingCart.addProduct(product);
    if (added) {
      setCart(() => shoppingCart.getProducts());
    }
  }

  const removeFromCart = (id) => {
    const removed = shoppingCart.removeProduct(id);
    if (removed) {
      setCart(() => shoppingCart.getProducts());
    }
  }

  return (
    <ShopContext.Provider value={{ addToCart, cart, products, removeFromCart }}>
      <Router />
    </ShopContext.Provider>
  )
}

export default App;
