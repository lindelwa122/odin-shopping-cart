import { createContext } from 'react';

export const ShopContext = createContext({
  products: [],
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});
