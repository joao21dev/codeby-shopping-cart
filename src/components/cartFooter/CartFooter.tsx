import React from 'react';
import styled from 'styled-components';

const CartFooter = () => {
  const Container = styled.footer``;

  const TotalWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    padding-block: 25px;
    border-top: 2px solid #d4d3d3;
    border-bottom: 2px solid #d4d3d3;
  `;

  const Total = styled.span`
    font-size: 18px;
    font-weight: 900;
    color: #000;
    margin-inline: 20px;
  `;

  const Amount = styled(Total)``;

  const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90px;
  `;

  const Button = styled.button`
    border: none;
    border-radius: 4px;
    cursor: pointer;
    outline: inherit;
    background-color: #0631f5a4;
    color: white;
    width: 90%;
    height: 50px;
  `;
  return (
    <Container>
      <TotalWrapper>
        <Total>Total</Total>
        <Amount>R$ 9,55</Amount>
      </TotalWrapper>
      <ButtonWrapper>
        <Button>Finalizar Compra</Button>
      </ButtonWrapper>
    </Container>
  );
};

export default CartFooter;
