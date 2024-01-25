/**
 * 
 * @param {string} id - The unique id of the product
 * @param {string} name - The name of the product
 * @param {number} price - The price of the product
 * @param {string} descr - The description of the product
 * @param {string} img - The image URL of the product
 * @returns An object with functions to retrieve data about the product
 */
const product = (id, name, price, descr, img) => {
  const getId = () => id;
  const getName = () => name;
  const getPrice = () => price;
  const getDescr = () => descr;
  const getImg = () => img;

  return {
    getId,
    getName,
    getPrice,
    getDescr,
    getImg,
  }
};

export default product;
