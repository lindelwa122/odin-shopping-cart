import product from '../product/product';

const shop = () => {
  const products = [];

  const getAllProducts = () => products;

  const clearShop = () => {
    const listLen = products.length;
    for (let i = 0;  i < listLen; i++) {
      products.pop();
    }
  }

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
   * @param {Product} product - product instance
   */
  const _validateProduct = (product) => {
    const throwError = (msg) => {throw new Error(msg)};

    if (typeof product.getId() !== 'string') {
      throwError('The id param must be a string.');
    }

    else if (typeof product.getName() !== 'string') {
      throwError('The name param must be of type string.');
    }

    else if (typeof product.getDescr() !== 'string') {
      throwError('The description param must be of type string.');
    }

    else if (typeof product.getImg() !== 'string') {
      throwError('The img param must be of type string.');
    }

    else if (typeof product.getPrice() !== 'number') {
      throwError('The price param must be of type number.')
    }

    else if (product.getPrice <= 0) {
      throwError('The price must be bigger than 0.');
    }

    const id = product.getId();
    const productWithSameId = products.find((product) => product.getId() === id);
    if (productWithSameId) {
      throwError('A product with the same id has been created.');
    }
  }

  /**
   * 
   * @param {string} id - The unique id of the product
   * @param {string} name - The name of the product
   * @param {number} price - The price of the product
   * @param {string} description - The description of the product
   * @param {string} img - The image URL of the product
   */
  const createProduct = (id, name, price, description, img) => {
    const p = product(id, name, price, description, img);
    _validateProduct(p);
    products.push(p);
  }

  /**
   * 
   * @param {string} id - The id of the product to find
   */
  const findProduct = (id) => {
    return products.find((product) => product.getId() === id);
  }

  return {
    clearShop,
    createProduct,
    findProduct,
    getAllProducts,
  }
};

export default shop();