import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchList, fetchFiltered, applyTextFilter } from "../reducers/list";
import { fetchBrands } from "../reducers/filters";
import BrandsFilter from "./BrandsFilter";
import NameFilter from "./NameFilter";
import ProductsList from "./ProductsList";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-gap: 5vw;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 1vh;
  grid-auto-flow: rows;
`;

const Filters = styled.form`
  input,
  select {
    font-size: 1.1em;
    padding: 4px;
    margin: 3px;
  }
`;

const List = () => {
  const {
    list,
    listRequestPending,
    listRequestError,
    filtered,
    filteredRequestPending,
    filteredRequestError,
  } = useSelector(state => state.listReducer);
  const {
    name,
    brand,
    brands,
    brandsRequestPending,
    brandsRequestError,
  } = useSelector(state => state.filtersReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!list?.length && !listRequestPending && !listRequestError) {
      setTimeout(() => dispatch(fetchList()), 0);
    }
  }, []);

  useEffect(() => {
    if (!filteredRequestPending && !filteredRequestError) {
      setTimeout(() => dispatch(fetchFiltered(brand)), 0);
    }
  }, [dispatch, brand]);

  useEffect(() => {
    if (
      list?.length &&
      !listRequestPending &&
      !listRequestError &&
      brands?.length <= 1 &&
      !brandsRequestPending &&
      !brandsRequestError
    ) {
      setTimeout(() => dispatch(fetchBrands(list, "brand")), 0);
    }
  }, [
    dispatch,
    list,
    brands,
    listRequestPending,
    listRequestError,
    brandsRequestPending,
    brandsRequestError,
  ]);

  useEffect(() => {
    setTimeout(() => dispatch(applyTextFilter(filtered, "name", name)), 0);
  }, [dispatch, filtered, name]);

  return (
    <>
      <section>
        <Filters name="filtersForm">
          <Grid>
            <BrandsFilter />
            <NameFilter />
          </Grid>
        </Filters>
      </section>
      <section>
        <ProductsList />
      </section>
    </>
  );
};

export default List;
