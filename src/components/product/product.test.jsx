import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Product from './product';

describe('Product Component', () => {
  const product = (() => {
    const getId = () => 'shop-1';
    const getName = () => 'Scarf';
    const getPrice = () => 78;
    const getDescr = () => 'A beautiful red scarf.';
    const getImg = () => 'https://fake-api.img.com/shop-1';

    return { getId, getName, getPrice, getDescr, getImg };
  })();

  it('renders correctly', () => {
    const { container } = render(<Product product={product}  />);
    expect(container).toMatchSnapshot();
  });
});