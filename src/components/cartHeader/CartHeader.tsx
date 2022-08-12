import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-bottom: 2px solid #d4d3d3;
`;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 900;
  color: #000;
`;

const CartHeader = () => {
  return (
    <Header>
      <Title>Meu carrinho</Title>
    </Header>
  );
};

export default CartHeader;
