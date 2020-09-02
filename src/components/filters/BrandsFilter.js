import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBrand } from "../../reducers/filters";
import TinySpinner from "../common/TinySpinner";
import styled from "styled-components";

const Wrapper = styled.div``;

const Alert = styled.div`
  font-size: 0.7em;
  padding: 5px;
  span {
    background-color: orange;
    padding: 5px;
  }
`;

const BrandsFilter = () => {
  const {
    brands,
    brand,
    brandsRequestPending,
    brandsRequestError,
  } = useSelector(state => state.filtersReducer);
  const { listRequestPending, listRequestError } = useSelector(
    state => state.listReducer
  );
  const dispatch = useDispatch();

  const changeHandler = e => {
    e.preventDefault();
    dispatch(setBrand(e.target.value));
  };

  return (
    <Wrapper>
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
      {(listRequestPending || brandsRequestPending) &&
      !brandsRequestError &&
      !listRequestError ? (
        <Alert>
          Wait a sec for some magic to happen <TinySpinner />
        </Alert>
      ) : (
        <Alert>
          <span>Now you can choose brands and more ...</span>
        </Alert>
      )}
    </Wrapper>
  );
};

export default BrandsFilter;
