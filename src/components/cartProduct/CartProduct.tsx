import React from 'react';
import styled from 'styled-components';

const imageUrl =
  'http://codeby.vteximg.com.br/arquivos/ids/159959-800-1029/truffon-meio-amargo.png?v=636930938547630000';

const Container = styled.section`
  display: flex;
  justify-content: flex-start;
  margin: 20px;
`;
const Image = styled.img`
  border: 2px solid #d4d3d3;
  width: 90px;
  height: 90px;
  object-fit:cover;
`;
const InfoWrapper = styled.div`
  margin-left: 20px;
`;
const Name = styled.h1`
  font-size: 14px;
`;
const Discount = styled.h2`
  font-size: 9px;
  color: #c7c4c4;
`;
const Price = styled.h2`
  font-size: 10px;
  font-weight: bold;
`;

const CartProduct = () => {
  return (
    <Container>
      <Image src={imageUrl} />
      <InfoWrapper>
        <Name>Trufa de Morango</Name>
        <Discount>R$ 1,23</Discount>
        <Price>R$ 1,11</Price>
      </InfoWrapper>
    </Container>
  );
};

export default CartProduct;
