import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 10px;
  background-color: #fff;
  height: 800px;
  width: 500px;
  box-shadow: 0px 0px 3px 5px #d7d7d7;
`;

const CartHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  border-bottom: 2px solid #d4d3d3;
`;
const CartHeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-transform: capitalize;
  color: #000;
`;

const CartContainer = () => {
  return (
    <Container>
      <CartHeader>
        <CartHeaderTitle>meu carrinho</CartHeaderTitle>
      </CartHeader>
    </Container>
  );
};

export default CartContainer;
