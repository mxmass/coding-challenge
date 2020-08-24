import React from "react";
import { useSelector } from "react-redux";

const ProductsList = () => {
  const { applied } = useSelector(state => state.listReducer);

  return (
    <ul>
      {applied?.map((v, k) => (
        <li key={k}>{v.name}</li>
      ))}
    </ul>
  );
};

export default ProductsList;
