import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBrand } from "../reducers/filters";

const BrandsFilter = () => {
  const { brands, brand, brandsRequestPending } = useSelector(
    state => state.filtersReducer
  );
  const { listRequestPending } = useSelector(state => state.listReducer);
  const dispatch = useDispatch();

  const changeHandler = e => {
    e.preventDefault();
    dispatch(setBrand(e.target.value));
  };

  return (
    <select
      onChange={changeHandler}
      value={brand}
      disabled={brandsRequestPending || listRequestPending}
    >
      {brands?.length &&
        brands.map((v, k) => (
          <option key={k} value={v}>
            {v}
          </option>
        ))}
    </select>
  );
};

export default BrandsFilter;
