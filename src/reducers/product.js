import {
  SET_PRODUCT_PENDING,
  SET_PRODUCT_ERROR,
  SET_PRODUCT,
} from './actionTypes';
import { PRODUCT_URL } from '../config';

const initialState = {
  product: {},
  productRequestPending: false,
  productRequestError: false,
  productRequestErrorDetails: null,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT_PENDING:
      return {
        ...state,
        productRequestPending: true,
      };
    case SET_PRODUCT_ERROR:
      return {
        ...state,
        product: {},
        productRequestError: true,
        productRequestErrorDetails: action.payload.error,
        productRequestPending: false,
      };
    case SET_PRODUCT:
      return {
        ...state,
        product: action.payload.data,
        productRequestError: false,
        productRequestErrorDetails: null,
        productRequestPending: false,
      };
    default:
      return state;
  }
}

export const fetchProduct = () => {
  return async dispatch => {
    try {
      dispatch(setProductPending());
      return await fetch(PRODUCT_URL)
        .then(res => res.json())
        .then(body => dispatch(fetchProductSuccess(body)))
        .catch(err => dispatch(fetchProductFailed(err.toString())))
    } catch (err) {
      dispatch(fetchProductFailed(err))
    }
  };
};

export const setProductPending = () => {
  return {
    type: SET_PRODUCT_PENDING,
  };
};

const fetchProductFailed = (error) => {
  return {
    type: SET_PRODUCT_ERROR,
    payload: {
      error
    }
  };
};

const fetchProductSuccess = (data) => {
  return {
    type: SET_PRODUCT,
    payload: {
      data
    }
  };
};
