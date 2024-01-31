import { useContext } from 'react';
import Navbar from '../header/navbar';
import { nanoid } from 'nanoid';
import ShopContext from '../../context';

const ShoppingCart = () => {
  const { cart, removeFromCart } = useContext(ShopContext);

  if (cart.length === 0) return <h1>The shopping cart is empty</h1>

  const productList = cart.map(product => (
    <tr key={nanoid()}>
      <td>
        <button 
          aria-label='remove product' 
          onClick={() => removeFromCart(product.getId())}>
            x
        </button>
      </td>
      <td>
        <img src={product.getImg()} alt={product.getDescr()} />
      </td>
      <td>
        <p aria-label='product name'>{product.getName()}</p>
        <p aria-label='product price'>{product.getPrice()}</p>
      </td>
      <td>{product.getQuantity()}</td>
      <td>{product.getTotalPrice()}</td>
    </tr>
  ));

  return (
    <>
      <Navbar />
      <main>
        <h1>Shopping Cart</h1>
        <h2>Product count: {cart.length}</h2>
        <table>
          <thead>
            <td>Item</td>
            <td>Quantity</td>
            <td>Price</td>
          </thead>
          <tbody>{productList}</tbody>
        </table>
        <button>Proceed to checkout</button>
      </main>
    </>
  )
};

export default ShoppingCart;
