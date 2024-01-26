import { afterEach, expect, test } from 'vitest';
import shop from './shop';

const productInfo = [
  { 
    id: '1', 
    name: 'X20 Watch', 
    price: 20, 
    description: 'Sleek watch', 
    img: 'https://fake-api.img.com/1' 
  },
  { 
    id: '2', 
    name: 'Geeks T-shirt', 
    price: 17, 
    description: 'Cool shirt', 
    img: 'https://fake-api.img.com/2' 
  },
  { 
    id: '3', 
    name: 'Cap', 
    price: 10, 
    description: 'Nice red and blue cap', 
    img: 'https://fake-api.img.com/3' 
  }, 
];

afterEach(() => {
  shop.clearShop();
});

test('retrieves all product to match the expected total test 1', () => {
  for (let i = 0; i < 2; i++) {
    const product = productInfo[i];
    shop.createProduct(
      product.id,
      product.name,
      product.price,
      product.description,
      product.img
    );
  }

  expect(shop.getAllProducts().length).toBe(2);
});

test('retrieves all product to match the expected total test 2', () => {
  for (let i = 0; i < 3; i++) {
    const product = productInfo[i];
    shop.createProduct(
      product.id,
      product.name,
      product.price,
      product.description,
      product.img
    );
  }

  expect(shop.getAllProducts().length).toBe(3);
});

test('shop creates the right product', () => {
  for (let i = 0; i < 3; i++) {
    const product = productInfo[i];
    shop.createProduct(
      product.id,
      product.name,
      product.price,
      product.description,
      product.img
    );
  
    const productInstance = shop.getAllProducts()[i];
  
    expect(productInstance.getId()).toBe(product.id);
    expect(productInstance.getName()).toBe(product.name);
    expect(productInstance.getPrice()).toBe(product.price);
    expect(productInstance.getDescr()).toBe(product.description);
    expect(productInstance.getImg()).toBe(product.img);
  }
});

test('throws an error if product with the same name has been created', () => {
  const product = productInfo[0];
  shop.createProduct(
    product.id,
    product.name,
    product.price,
    product.description,
    product.img
  );

  expect(() => {
    shop.createProduct(
      product.id,
      product.name,
      product.price,
      product.description,
      product.img
    );
  }).toThrow('A product with the same id has been created.');
});

test('findProduct returns the right product', () => {
  for (let i = 0; i < 3; i++) {
    const product = productInfo[i];
    shop.createProduct(
      product.id,
      product.name,
      product.price,
      product.description,
      product.img
    );
  
    const productInstance = shop.findProduct(product.id);
  
    expect(productInstance.getId()).toBe(product.id);
    expect(productInstance.getName()).toBe(product.name);
    expect(productInstance.getPrice()).toBe(product.price);
    expect(productInstance.getDescr()).toBe(product.description);
    expect(productInstance.getImg()).toBe(product.img);
  }
});

test('findProduct returns undefined for a product that doesn\'t exist', () => {
  const product = shop.findProduct('nonexistence');
  expect(product).toBeUndefined();
});