import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Shop from './shop';

describe('Shop Component', () => {
  it('renders correctly', () => {
    const { container } = render(<Shop />);
    expect(container).toMatchSnapshot();
  });
});
