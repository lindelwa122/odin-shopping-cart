import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import AddToCart from './add-to-cart';

describe('AddToCart Component', () => {
  it('renders correctly', () => {
    const { container } = render(<AddToCart />);
    expect(container).toMatchSnapshot();
  });
});
