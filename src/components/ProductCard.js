import React from "react";
import { useHistory } from "react-router-dom";
import ProductImage from "./ProductImage";
import styled from "styled-components";

const Card = styled.div`
  margin: 5px;
  padding: 5px;
  border: solid #eee 1px;
  &:hover {
    border: solid #999 1px;
    cursor: pointer;
  }
`;

const Brand = styled.div`
  font-weight: bold;
  text-transform: uppercase;
`;

const Title = styled.div`
  font-size: 0.8em;
  min-height: 4em;
`;

const Price = styled.div`
  font-size: 1.3em;
  font-weight: bold;
`;

const ProductCard = ({
  id,
  brand,
  name,
  price,
  price_sign,
  currency,
  image_link,
}) => {
  let history = useHistory();
  const clickHandler = () => {
    history.push(`/product/${id}`);
  };

  return (
    <Card onClick={clickHandler}>
      <Brand>{brand}</Brand>
      {image_link && <ProductImage src={image_link} name={name} />}
      {name && <Title>{name}</Title>}
      {price && (
        <Price>
          {price_sign || "$"}
          {price} {currency || "USD"}
        </Price>
      )}
    </Card>
  );
};

export default ProductCard;
