import { afterEach, expect, test } from 'vitest';
import shoppingCart from './shopping-cart';
import shop from '../shop/shop';

const productInfo = [
  {
    id: '1',
    name: 'X20 Watch',
    price: 20,
    description: 'Sleek watch',
    img: 'https://fake-api.img.com/1',
  },
  {
    id: '2',
    name: 'Geeks T-shirt',
    price: 17,
    description: 'Cool shirt',
    img: 'https://fake-api.img.com/2',
  },
  {
    id: '3',
    name: 'Cap',
    price: 10,
    description: 'Nice red and blue cap',
    img: 'https://fake-api.img.com/3',
  },
];

for (const info of productInfo) {
  shop.createProduct(
    info.id,
    info.name,
    info.price,
    info.description,
    info.img,
  );
}

const products = shop.getAllProducts();

afterEach(() => {
  shoppingCart.clear();
});

test('add the right product and return all the products in the cart', () => {
  for (let i = 0; i < 3; i++) {
    const product = products[i];
    shoppingCart.addProduct(product);

    expect(shoppingCart.getProducts().length).toBe(i + 1);
  }
});

test('shopping cart is empty after being cleared', () => {
  for (const product of products) {
    shoppingCart.addProduct(product);
  }
  shoppingCart.clear();
  expect(shoppingCart.getProducts().length).toBe(0);
});

test('add a product to cart correctly', () => {
  for (let i = 0; i < products.length; i++) {
    shoppingCart.clear();

    const product = products[i];
    shoppingCart.addProduct(product);

    const item = shoppingCart.getProducts()[0];

    expect(item.getId()).toBe(product.getId());
    expect(item.getName()).toBe(product.getName());
    expect(item.getDescr()).toBe(product.getDescr());
    expect(item.getImg()).toBe(product.getImg());
    expect(item.getPrice()).toBe(product.getPrice());
  }
});

test('the total items in the cart matches the expected number', () => {
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    shoppingCart.addProduct(product);

    expect(shoppingCart.getTotalItems()).toBe(i + 1);
  }
});

test('the total price of items in the cart matches the expected price', () => {
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    shoppingCart.addProduct(product);

    const items = shoppingCart.getProducts();
    const totalPrice = items.reduce((prev, item) => {
      return prev + item.getPrice();
    }, 0);

    expect(shoppingCart.getTotalPrice()).toBe(totalPrice);
  }
});

const getRand = (len, start = 0) => {
  return Math.floor(Math.random() * len) + start;
};

test('the quantity and the total price of the product in the cart matches the expected values', () => {
  const product = products[getRand(3)];

  const quantity = getRand(10, 1);
  for (let i = 0; i < quantity; i++) {
    shoppingCart.addProduct(product);
  }

  const item = shoppingCart.getProducts()[0];
  const totalPrice = product.getPrice() * quantity;

  expect(item.getTotalPrice()).toBe(totalPrice);
  expect(item.getQuantity()).toBe(quantity);
});

test('a correct product is removed from the cart', () => {
  for (const product of products) shoppingCart.addProduct(product);

  expect(shoppingCart.getTotalItems()).toBe(products.length);

  const toRemove = products[getRand(3)];
  shoppingCart.removeProduct(toRemove.getId());

  expect(shoppingCart.getTotalItems()).toBe(products.length - 1);

  const items = shoppingCart.getProducts();
  items.forEach((item) => {
    expect(item.getId()).not.toBe(toRemove.getId());
    expect(item.getName()).not.toBe(toRemove.getName());
    expect(item.getDescr()).not.toBe(toRemove.getDescr());
    expect(item.getImg()).not.toBe(toRemove.getImg());
    expect(item.getPrice()).not.toBe(toRemove.getPrice());
  });
});

test("no product is removed if the specified product doesn't exist", () => {
  for (const product of products) shoppingCart.addProduct(product);
  expect(shoppingCart.getTotalItems()).toBe(products.length);
  expect(shoppingCart.removeProduct('nonexistence')).toBe(false);
  expect(shoppingCart.getTotalItems()).toBe(products.length);
});
