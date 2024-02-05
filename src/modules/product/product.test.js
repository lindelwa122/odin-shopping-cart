import { expect, test } from 'vitest';
import product from './product';

test('product returns the right data test 1', () => {
  const productInfo = {
    id: 'x-ejkfb3i4h',
    name: 'Red Scarf',
    price: 260,
    description: 'A beautiful scarf',
    image: 'https://fake-api.img.com/product/x-ejkfb3i4h.jpeg',
  };

  const p = product(
    productInfo.id,
    productInfo.name,
    productInfo.price,
    productInfo.description,
    productInfo.image,
  );

  expect(p.getId()).toBe(productInfo.id);
  expect(p.getName()).toBe(productInfo.name);
  expect(p.getPrice()).toBe(productInfo.price);
  expect(p.getDescr()).toBe(productInfo.description);
  expect(p.getImg()).toBe(productInfo.image);
});

test('product returns the right data test 2', () => {
  const productInfo = {
    id: 'x-serhtkjdn',
    name: 'Green socks',
    price: 160,
    description: 'Cozy green nicely knitted socks',
    image: 'https://fake-api.img.com/product/x-serhtkjdn.jpeg',
  };

  const p = product(
    productInfo.id,
    productInfo.name,
    productInfo.price,
    productInfo.description,
    productInfo.image,
  );

  expect(p.getId()).toBe(productInfo.id);
  expect(p.getName()).toBe(productInfo.name);
  expect(p.getPrice()).toBe(productInfo.price);
  expect(p.getDescr()).toBe(productInfo.description);
  expect(p.getImg()).toBe(productInfo.image);
});
