import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Taxi Phrasebook title', () => {
  render(<App />);
  const headingElement = screen.getByText(/Taxi Phrasebook/i);
  expect(headingElement).toBeInTheDocument();
});
