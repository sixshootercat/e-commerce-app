import React from 'react';
import { App } from './App';
import { render } from '@testing-library/react';

describe('testing App component', () => {
  it('renders correctly without crashing', () => {
    const { getByText } = render(<App />);
  });
});
