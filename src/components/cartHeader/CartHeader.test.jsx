import React from 'react';
import { render, screen } from '@testing-library/react';
import CartHeader from './CartHeader';

it('should render header title', () => {
  render(<CartHeader />);
  const linkElement = screen.getByText(/meu carrinho/i);
  expect(linkElement).toBeInTheDocument();
});
