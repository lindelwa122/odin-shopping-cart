import { useContext } from 'react';

import Navbar from '../header/navbar';
import { nanoid } from 'nanoid';
import ShopContext from '../../context';
import styles from './shopping-cart.module.css';
import { btn } from '../home/home.module.css';

const ShoppingCart = () => {
  const { cart, removeFromCart } = useContext(ShopContext);

  if (cart.length === 0) return <h1>The shopping cart is empty</h1>

  const productList = cart.map(product => (
    <tr key={nanoid()}>
      <td className={styles.td}>
        <button 
          aria-label='remove product' 
          className={styles.btn}
          onClick={() => removeFromCart(product.getId())}>
            x
        </button>
      </td>
      <td className={styles.td}>
        <img className={styles.img} src={product.getImg()} alt={product.getDescr()} />
      </td>
      <td className={styles.td}>
        <p aria-label='product name'>{product.getName()}</p>
        <p aria-label='product price'>R{product.getPrice().toFixed(2)}</p>
      </td>
      <td className={styles.td}>{product.getQuantity()}</td>
      <td className={styles.td}>R{product.getTotalPrice().toFixed(2)}</td>
    </tr>
  ));

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <table className={styles.table}>
          <caption className={styles.caption}>Shopping Cart</caption>
          <thead>
            <tr>
              <th className={styles.th} colSpan='3'>Item</th>
              <th className={styles.th}>Quantity</th>
              <th className={styles.th}>Price</th>
            </tr>
          </thead>
          <tbody>{productList}</tbody>
        </table>
        <button className={btn}>Proceed to checkout</button>
      </main>
    </>
  )
};

export default ShoppingCart;
