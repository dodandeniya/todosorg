import React from 'react';
import { render } from '@testing-library/react';

import SearchScreen from './SearchScreen';

describe('SearchScreen', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchScreen />);
    expect(baseElement).toBeTruthy();
  });
});
