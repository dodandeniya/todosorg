import React from 'react';
import { render } from '@testing-library/react';

import RegisterScreen from './RegisterScreen';

describe('RegisterScreen', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RegisterScreen />);
    expect(baseElement).toBeTruthy();
  });
});
