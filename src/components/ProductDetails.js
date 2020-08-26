import React from "react";
import ProductImage from "./ProductImage";
import styled from "styled-components";

const Card = styled.div`
  width: 50vw;
  margin: 5em auto;
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
  brand,
  name,
  price,
  price_sign,
  currency,
  image_link,
}) => {
  return (
    <Card>
      <Brand>{brand}</Brand>
      {image_link && <ProductImage src={image_link} name={name} />}
      {name && <Title>{name}</Title>}
      <Price>
        {price_sign || "$"}
        {price} {currency || "USD"}
      </Price>
    </Card>
  );
};

export default ProductCard;
