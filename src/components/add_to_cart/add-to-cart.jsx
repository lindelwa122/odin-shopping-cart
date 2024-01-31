import { useParams } from 'react-router-dom';
import { useEffect, useContext, useState, useRef } from 'react';

import Navbar from '../header/navbar';
import shop from '../../modules/shop/shop';
import ShopContext from '../../context';

const AddToCart = () => {
  const { id } = useParams();
  const product = shop.findProduct(id);

  const { addToCart } = useContext(ShopContext);
  const [quantity, setQuantity] = useState(1);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const val = e.target.value;
    if (val > 0 || val === '') {
      setQuantity(() => (
        val !== '' ? +val : val
      ));
    }
  }

  const incrementQuantity = () => {
    setQuantity(prev => quantity !== '' ? prev + 1 : 1);
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => quantity !== '' ? prev - 1 : 1);
    }
  }

  useEffect(() => {
    if (typeof quantity === 'number' && quantity > 0) {
      inputRef.current.setCustomValidity('');
    } else {
      inputRef.current.setCustomValidity('Quantity must be a number and be greater than 0.');
    }
  }, [quantity]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (typeof quantity === 'number' && quantity > 0) {
      addToCart(product);
      setQuantity(1);
      alert('Product added to cart.');
    }
  }

  return (
    <>
      <Navbar />
      <main>
        <div>
          <img src={product.getImg()} alt={product.getName()} />
        </div>
        <div>
          <h1>{product.getName()}</h1>
          <p aria-label='product price'>R{product.getPrice()}</p>
          <form onSubmit={handleSubmit}>
            <input ref={inputRef} type='number' value={quantity} onChange={handleChange} />
            <button 
              aria-label='increment quantity' 
              type='button'
              onClick={incrementQuantity}>
                Increment
            </button>
            <button 
              aria-label='decrement quantity' 
              type='button'
              disabled={quantity <= 1}
              onClick={decrementQuantity}>
                Decrement
            </button>
            <button type='submit'>Add to cart</button>
          </form>
        </div>
        <p aria-label='product description'>{product.getDescr()}</p>
      </main>
    </>
  )

};

export default AddToCart;
