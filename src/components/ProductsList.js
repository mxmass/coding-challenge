import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Spinner from "./common/Spinner";
import Alert from "./common/Alert";
import styled from "styled-components";

const ProductGrid = styled.div`
  display: grid;
  grid-gap: 0.5vw;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-flow: rows;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProductsList = () => {
  const { applied, filteredRequestPending } = useSelector(
    state => state.listReducer
  );

  if (!filteredRequestPending) {
    if (!applied?.length) {
      return (
        <Alert>
          Nothing found here ... may be you should change something in your
          search?
        </Alert>
      );
    } else {
      return (
        <ProductGrid>
          {applied?.map((v, k) => (
            <ProductCard key={k} {...v} />
          ))}
        </ProductGrid>
      );
    }
  } else {
    return <Spinner />;
  }
};

export default ProductsList;
