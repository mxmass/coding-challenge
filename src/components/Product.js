import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../reducers/product";

const Product = () => {
  const product = useSelector(state => state.productReducer.product);
  const dispatch = useDispatch(); 

  useEffect(() => {
      setTimeout(() => dispatch(fetchProduct()), 2000)
  }, [dispatch])

  return (
    <>
        {product?.name}
    </>
  );
}

export default Product;