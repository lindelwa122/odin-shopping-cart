import { useEffect, useContext, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import ShopContext from '../../context';
import styles from './navbar.module.css';
import { HiShoppingBag } from 'react-icons/hi';

const Navbar = () => {
  const homeLineRef = useRef(null);
  const shopLineRef = useRef(null);
  const homeLinkRef = useRef(null);
  const shopLinkRef = useRef(null);

  const { cartTotal } = useContext(ShopContext);
  
  useEffect(() => {
    if (homeLinkRef.current.classList.contains('active')) {
      homeLineRef.current.classList.add(styles.active);
    } 
  
    if (shopLinkRef.current.classList.contains('active')) {
      shopLineRef.current.classList.add(styles.active);
    }
  });

  const mouseOverHandler = (ref, targetRef) => {
    if (!ref.current.classList.contains('active')) {
      targetRef.current.classList.add(styles.active);
    }
  }

  const mouseOutHandler = (ref, targetRef) => {
    if (!ref.current.classList.contains('active')) {
      targetRef.current.classList.remove(styles.active);
    }
  }

  return (
    <nav className={styles.nav}>
      <p aria-label='company name' className={styles.heading}>Three seconds</p>
      <div className={styles.links}>
        <ul className={styles.ul}>
          <li 
            onMouseOver={() => mouseOverHandler(homeLinkRef, homeLineRef)}
            onMouseOut={() => mouseOutHandler(homeLinkRef, homeLineRef)}>

            <NavLink ref={homeLinkRef} to='/'>Home</NavLink>
            <div ref={homeLineRef} className={styles.line}></div>

          </li>
          <li 
            onMouseOver={() => mouseOverHandler(shopLinkRef, shopLineRef)}
            onMouseOut={() => mouseOutHandler(shopLinkRef, shopLineRef)}>

            <NavLink ref={shopLinkRef} to='/shop'>Shop</NavLink>
            <div ref={shopLineRef} className={styles.line}></div>

          </li>
        </ul>
        <NavLink className={styles.cartContainer} to='/cart'>
          <HiShoppingBag className={styles.cart} />
          <div className={styles.cartTotal}>{cartTotal}</div>
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar;