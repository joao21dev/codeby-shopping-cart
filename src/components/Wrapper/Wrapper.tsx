import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 80px;
  border-radius: 10px;
  background-color: #fff;
  height: 450px;
  width: 250px;
  box-shadow: 0px 0px 3px 5px #d7d7d7;
`;

const Wrapper = () => {
  return <Container></Container>;
};

export default Wrapper;
