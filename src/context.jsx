import { createContext } from 'react';

const ShopContext = createContext({
  products: [],
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export default ShopContext;
