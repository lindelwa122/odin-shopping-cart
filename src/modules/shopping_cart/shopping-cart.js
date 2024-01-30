const shoppingCart = () => {
  const cart = [];

  const clear = () => {
    cart.splice(0, cart.length);
  };

  const extendedProduct = (product) => {
    let quantity = 1;
    const getQuantity = () => quantity;
    const incrementQuantity = () => ++quantity;
    const getTotalPrice = () => product.getPrice() * quantity;

    return Object.assign(
      {},
      {
        incrementQuantity,
        getTotalPrice,
        getQuantity,
      },
      product,
    );
  };

  /**
   * @typedef Product
   * @type {object}
   * @property {Function} getId - retrieves the id of the product
   * @property {Function} getName - retrieves the name of the product
   * @property {Function} getPrice - retrieves the price of the product
   * @property {Function} getDescr - retrieves the description of the product
   * @property {Function} getImg - retrieves the image of the product
   */

  /**
   *
   * @param {Product} p - product instance
   */
  const addProduct = (p) => {
    const productInCart = cart.find((item) => item.getId() === p.getId());
    if (productInCart) {
      productInCart.incrementQuantity();
      return false;
    }

    const extProduct = extendedProduct(p);
    cart.push(extProduct);
    return true;
  };

  const getProducts = () => [...cart];
    
  const getTotalItems = () => cart.length;

  const getTotalPrice = () => {
    return cart.reduce((prev, item) => {
      return prev + item.getPrice();
    }, 0);
  };

  /**
   * Removes the product that matches the specified id
   * @param {string} id - An id of the product to be removed
   * @returns true if the product was successfully removed; otherwise false
   */
  const removeProduct = (id) => {
    if (typeof id !== 'string') {
      throw new Error('The id of a prodcut is expected to be of type string.');
    }

    const toRemove = cart.findIndex((item) => item.getId() === id);
    if (toRemove !== -1) {
      cart.splice(toRemove, 1);
      return true;
    }
    return false;
  };

  return {
    addProduct,
    clear,
    getProducts,
    getTotalItems,
    getTotalPrice,
    removeProduct,
  };
};

export default shoppingCart();
