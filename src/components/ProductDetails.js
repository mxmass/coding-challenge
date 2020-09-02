import React from "react";
import ProductImage from "./ProductImage";
import ProductColor from "./ProductColor";
import styled from "styled-components";

const Card = styled.div`
  width: 50vw;
  margin: 5em auto;
  padding: 5px;
  border: solid #eee 1px;
  &:hover {
    border: solid #999 1px;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-gap: 1vw;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: rows;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
  margin: 10px 0;
`;

const Cell = styled.div``;
const Link = styled.a`
  color: #000;
  &:hover {
    color: #999;
    text-decoration: none;
  }
`;

const Brand = styled.span`
  font-weight: bold;
  text-transform: uppercase;
`;

const Price = styled.div`
  font-size: 1.3em;
  font-weight: bold;
  padding: 0.2em;
  margin: 0.2em 0;
`;

const Text = styled.div`
  font-size: 1em;
  padding: 0.3em;
  margin-bottom: ${props => props.margin};
`;

const BlockLabel = styled.div`
  font-size: 0.7em;
  padding: 0 0.5em;
  text-transform: uppercase;
  font-weight: bold;
`;

const Colors = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0.5em 0;
`;

const Tag = styled.div`
  display: inline;
  margin: 0.5em;
  text-decoration: underline;
`;

const ProductDetails = ({
  brand,
  name,
  price,
  price_sign,
  currency,
  image_link,
  description,
  website_link,
  rating,
  product_type,
  tag_list,
  product_colors,
}) => {
  return (
    <Card>
      <Wrapper>
        <Cell>
          {image_link && <ProductImage src={image_link} name={name} />}
          {product_colors?.length && (
            <>
              <BlockLabel>Available colors</BlockLabel>
              <Colors>
                {product_colors?.map((v, k) => (
                  <ProductColor key={k} {...v} />
                ))}
              </Colors>
            </>
          )}
        </Cell>
        <Cell>
          <Text>
            {product_type && (
              <Brand>
                [{product_type}]<br />
              </Brand>
            )}
            {name && <Brand>{name}</Brand>}
            {brand && (
              <Brand>
                &nbsp;by&nbsp;
                {website_link ? (
                  <Link href={website_link}>{brand}</Link>
                ) : (
                  { brand }
                )}
              </Brand>
            )}
          </Text>
          <Price>
            {price_sign || "$"}
            {price} {currency || "USD"}
          </Price>
          {description && <Text margin="1em">{description}</Text>}
          {tag_list?.map((v, k) => (
            <Tag key={k}>#{v}</Tag>
          ))}
        </Cell>
      </Wrapper>
    </Card>
  );
};

export default ProductDetails;
