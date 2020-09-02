import React from "react";
import useFetch from "../hooks/useFetch";
import { PRODUCT_BASE_URL } from "../config";
import ProductDetails from "./ProductDetails";
import Spinner from "./common/Spinner";
import Alert from "./common/Alert";

const Product = ({ match }) => {
  const url = PRODUCT_BASE_URL + match.params.id + ".json";
  const { response, error, loading } = useFetch(url);

  return (
    <>
      {loading && <Spinner />}
      {response && <ProductDetails {...response} />}
      {error && <Alert>error?.toString()</Alert>}
    </>
  );
};

export default Product;
