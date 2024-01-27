import { nanoid } from 'nanoid';

import { useProductsData } from '../../utils/custom-hooks';
import Product from '../product/product';
import Navbar from '../header/navbar';

const Shop = () => {
  const { error, loading, products } = useProductsData();

  if (error) {
    console.log(error);
    return <h1>The was an error.</h1>
  }

  if (loading) return <h1>Loading...</h1>

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
