import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IGetProducts, IProduct } from '../cartProduct/CartProductModel';
import FreeShipping from '../freeShipping/FreeShipping';

const Container = styled.footer`
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin-bottom: 0px;
`;

const TotalWrapper = styled.section`
  padding-block: 25px;
  border-top: 2px solid #d4d3d3;
  border-bottom: 2px solid #d4d3d3;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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

const CartFooter = () => {
  const [products, setPRoducts] = useState<any | null>([]);

  useEffect(() => {
    axios
      .get<IGetProducts>('http://localhost:3001/items')
      .then((res) => {
        console.log(res);
        setPRoducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const pricesArr = products.map((product: IProduct) => {
    return product.sellingPrice;
  });

  const total = pricesArr.reduce(function (sum: number, value: number) {
    return sum + value;
  }, 0);

  const currencyFormat = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
  return (
    <Container>
      <TotalWrapper>
        <InfoWrapper>
          <Total>Total</Total>
          <Amount>{currencyFormat.format(total)}</Amount>
        </InfoWrapper>
        {total > 10 && <FreeShipping />}
      </TotalWrapper>
      <ButtonWrapper>
        <Button>Finalizar Compra</Button>
      </ButtonWrapper>
    </Container>
  );
};

export default CartFooter;
