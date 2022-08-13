import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  background-color: #b0eeb0cf;
  border-radius: 50px;
  height: 30px;
  width:300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: green;
  font-size: 14px;
  font-weight: 400;
`;

const FreeShipping = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Parabéns, sua compra tem frete grátis!</Title>
      </Wrapper>
    </Container>
  );
};

export default FreeShipping;
