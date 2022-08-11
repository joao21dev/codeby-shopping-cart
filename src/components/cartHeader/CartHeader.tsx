import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  border-bottom: 2px solid #d4d3d3;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-transform: capitalize;
  color: #000;
`;

const CartHeader = () => {
  return (
    <Header>
      <Title>meu carrinho</Title>
    </Header>
  );
};

export default CartHeader;
