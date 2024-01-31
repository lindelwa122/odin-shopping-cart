const cache = () => {
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
   * Save products in localStorage using the specified key
   * @param {Array<Product>} products - An array of products to cache
   * @param {string} key - A key which will later on be used to retrieve the products
   */
  const save = (products, key) => {
    const newArr = [];
    products.forEach((product) => {
      const newObj = {};
      for (const [key, val] of Object.entries(product)) {
        newObj[key] = val();
      }
      newArr.push(newObj);
    });
    localStorage.setItem(key, JSON.stringify(newArr));
  };

  /**
   * Retrieves and returns an array of products from localStorage
   * @param {string} key - A key to retrieve products from localStorage
   * @returns {Array} An array of products
   */
  const getData = (key) => {
    const products = localStorage.getItem(key);
    if (products) return JSON.parse(products);
    return [];
  };

  return { getData, save };
};

export default cache();
