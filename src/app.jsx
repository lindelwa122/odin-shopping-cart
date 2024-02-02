import { useState } from 'react';
import 'normalize.css';
import './main.css';

import { useProductsData } from './utils/custom-hooks';
import cartCache from './modules/cache/cartCache';
import Router from './router';
import shoppingCart from './modules/shopping_cart/shopping-cart';
import ShopContext from './context';

const App = () => {
  const { error, loading, products } = useProductsData();
  const [cart, setCart] = useState(() => cartCache.getData());
  const [cartTotal, setCartTotal] = useState(() => shoppingCart.getTotalItems());

  if (error) {
    console.log(error);
    return <h1>There was an error</h1>
  }

  if (loading) return <h1>Loading...</h1>

  const addToCart = (product, quantity) => {
    const added = shoppingCart.addProduct(product, quantity);
    if (added) {
      setCart(() => shoppingCart.getProducts());
      setCartTotal(() => shoppingCart.getTotalItems());
      cartCache.save();
    }
  }

  const removeFromCart = (id) => {
    const removed = shoppingCart.removeProduct(id);
    if (removed) {
      setCart(() => shoppingCart.getProducts());
      setCartTotal(() => shoppingCart.getTotalItems());
      cartCache.save();
    }
  }

  return (
    <ShopContext.Provider value={{ addToCart, cart, cartTotal, products, removeFromCart }}>
      <Router />
    </ShopContext.Provider>
  )
}

export default App;
