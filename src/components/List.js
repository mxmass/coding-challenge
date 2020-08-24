import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchList, fetchFiltered, applyTextFilter } from "../reducers/list";
import { fetchBrands } from "../reducers/filters";
import BrandsFilter from "./BrandsFilter";
import NameFilter from "./NameFilter";
import ProductsList from "./ProductsList";

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
  }, [name]);

  return (
    <>
      <form name="filtersForm">
        <BrandsFilter />
        <NameFilter />
      </form>
      <ProductsList />
    </>
  );
};

export default List;
