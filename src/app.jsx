import { useState } from 'react';
import 'normalize.css';
import './main.css';

import { useProductsData } from './utils/custom-hooks';
import cartCache from './modules/cache/cartCache';
import ErrorPage from './components/error_page/error-page';
import Loading from './components/loading_page/loading-page';
import Router from './router';
import shoppingCart from './modules/shopping_cart/shopping-cart';
import ShopContext from './context';

const App = () => {
  const { error, loading, products } = useProductsData();
  const [cart, setCart] = useState(() => cartCache.getData());
  const [cartTotal, setCartTotal] = useState(() => shoppingCart.getTotalItems());

  if (error) {
    return <ErrorPage error={error} />
  }

  if (loading) return <Loading />

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
