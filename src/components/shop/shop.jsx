import { nanoid } from 'nanoid';
import { useContext } from 'react';
import Product from '../product/product';
import Navbar from '../header/navbar';
import ShopContext from '../../context';

const Shop = () => {
  const { products } = useContext(ShopContext);

  const productsView = products.map(product => (
    <Product key={nanoid()} product={product} />
  ));

  return (
    <>
      <Navbar />
      <div>{productsView}</div>
    </>
  )
};

export default Shop;
