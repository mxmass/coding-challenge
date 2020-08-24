import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../reducers/product";

const Product = () => {
  const { product, productRequestPending, productRequestError } = useSelector(state => state.productReducer);
  const dispatch = useDispatch(); 

  useEffect(() => {
    if (!product?.name && !productRequestPending && !productRequestError)
      setTimeout(() => dispatch(fetchProduct()), 0)
  }, [dispatch, product, productRequestPending, productRequestError])

  return (
    <>
      <div>{product?.name}</div>
    </>
  );
}

export default Product;