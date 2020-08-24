import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchList, fetchFiltered } from "../reducers/list";
import { fetchBrands } from '../reducers/filters';

const List = () => {
  const { list, 
          listRequestPending, 
          listRequestError, 
          filtered, 
          filteredRequestPending, 
          filteredRequestError 
        } = useSelector(state => state.listReducer);
  const { brands, 
          brandsRequestPending, 
          brandsRequestError 
        } = useSelector(state => state.filtersReducer);
  const dispatch = useDispatch(); 

  useEffect(() => {
    if (!list?.length && !listRequestPending && !listRequestError) {
      setTimeout(() => dispatch(fetchList()), 0)
    }
  }, [])

  useEffect(() => {
    if (!filtered?.length && !filteredRequestPending && !filteredRequestError) {
      setTimeout(() => dispatch(fetchFiltered()), 0)
    }
  }, [])

  useEffect(() => {
    if (list?.length && !listRequestPending && !listRequestError && brands?.length <= 1 && !brandsRequestPending && !brandsRequestError) {
      setTimeout(() => dispatch(fetchBrands(list, 'brand')), 0)
    }
  }, [list])

  return (
    <>
        {filtered?.length}<br />
        {list?.length}<br />
        {brands?.length}
    </>
  );
}

export default List;