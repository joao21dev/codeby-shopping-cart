import React from 'react';
import styled from 'styled-components';
import CartFooter from '../cartFooter/CartFooter';
import CartHeader from '../cartHeader/CartHeader';
import CartProduct from '../cartProduct/CartProduct';

const Container = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 10px;
  background-color: #fff;
  height: 700px;
  width: 420px;
  box-shadow: 0px 0px 3px 5px #d7d7d7;
`;

const CartContainer = () => {
  return (
    <Container>
      <CartHeader />
      <CartProduct />
      <CartFooter />
    </Container>
  );
};

export default CartContainer;
