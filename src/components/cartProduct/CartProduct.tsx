import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IGetProducts, IProduct } from './CartProductModel';

const Container = styled.section`
  display: flex;
  justify-content: flex-start;
  margin: 20px;
`;
const Image = styled.img`
  border: 2px solid #d4d3d3;
  width: 90px;
  height: 90px;
  object-fit: cover;
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

const PaginationButtonsWrapp = styled.div`
  position: fixed;
  bottom: 210px;
  left: 0px;
  right: 0px;
  margin-bottom: 0px;
  padding-block: 30px;
  display: flex;
  justify-content: center;

  & :hover {
    opacity: 0.8;
  }
`;

const Button = styled.button`
  margin-inline: 5px;
  width: 34px;
  height: 35px;
  cursor: pointer;
  background-color: ${({ index, currentPage }: any) =>
    index === currentPage ? '#0631f5a4' : 'red'};

  border: 1px solid #0631f5a4;
  border-radius: 5px;
  color: #fff;
`;

const url = 'https://codeby-shopping-cart-challenge.herokuapp.com/items';

const CartProduct = () => {
  const [products, setPRoducts] = useState<any | null>([]);
  const [productsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(products.length / productsPerPage);
  const startIndex = currentPage * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const currencyFormat = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  useEffect(() => {
    axios
      .get<IGetProducts>(url)
      .then((res) => {
        console.log(res);
        setPRoducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {currentProducts.map((product: IProduct) => {
        return (
          <Container key={product.id}>
            <Image src={product.imageUrl} />
            <InfoWrapper>
              <Name>{product.name}</Name>
              <Discount>{currencyFormat.format(product.listPrice)}</Discount>

              <Price>{currencyFormat.format(product.sellingPrice)}</Price>
            </InfoWrapper>
          </Container>
        );
      })}
      <PaginationButtonsWrapp>
        {Array.from(Array(pages), (item, index) => {
          return (
            <div>
              <Button
                value={index}
                onClick={(e) => setCurrentPage(Number((e.target as HTMLInputElement).value))}
              >
                {index + 1}
              </Button>
            </div>
          );
        })}
      </PaginationButtonsWrapp>
    </div>
  );
};

export default CartProduct;
