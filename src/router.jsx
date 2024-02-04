import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AddToCart from './components/add_to_cart/add-to-cart';
import Checkout from './components/checkout/checkout';
import ErrorPage from './components/error_page/error-page';
import Home from './components/home/home';
import Shop from './components/shop/shop';
import ShoppingCart from './components/shopping_cart/shopping-cart';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: 'shop',
      element: <Shop />,
    },
    {
      path: 'product/:id',
      element: <AddToCart />,
    },
    {
      path: 'cart',
      element: <ShoppingCart />,
    },
    {
      path: 'checkout',
      element: <Checkout />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
