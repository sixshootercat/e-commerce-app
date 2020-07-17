import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

describe('testing App component', () => {
  it('renders correctly without crashing', async () => {
    const { findByText } = render(
      <Provider>
        <App />
      </Provider>
    );
    const title = await findByText(/CRWN Clothing/);
    expect(title).toBeInTheDocument(0);
  });
});
