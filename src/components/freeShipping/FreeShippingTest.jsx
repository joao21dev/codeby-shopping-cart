import React from 'react';
import { render, screen } from '@testing-library/react';
import FreeShipping from './FreeShipping';

it('should render title', () => {
  render(<FreeShipping />);
  const linkElement = screen.getByText(/Parabéns, sua compra tem frete grátis!/i);
  expect(linkElement).toBeInTheDocument();
});
