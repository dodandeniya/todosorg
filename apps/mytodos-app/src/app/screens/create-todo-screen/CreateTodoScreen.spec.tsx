import React from 'react';
import { render } from '@testing-library/react';

import CreateTodoScreen from './CreateTodoScreen';

describe('CreateTodoScreen', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreateTodoScreen />);
    expect(baseElement).toBeTruthy();
  });
});
