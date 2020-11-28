import React from 'react';
import { render } from '@testing-library/react';

import HomeScreen from './HomeScreen';

describe('HomeScreen', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeScreen />);
    expect(baseElement).toBeTruthy();
  });
});
