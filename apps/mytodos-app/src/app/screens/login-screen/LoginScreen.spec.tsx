import React from 'react';
import { render } from '@testing-library/react';

import LoginScreen from './LoginScreen';

describe('LoginScreen', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoginScreen />);
    expect(baseElement).toBeTruthy();
  });
});
