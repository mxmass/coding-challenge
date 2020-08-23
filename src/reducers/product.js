import {
  SET_PENDING,
  SET_ERROR,
  SET_PRODUCT,
} from './actionTypes';
import { API_URL } from '../config';

const initialState = {
  product: {},
  productRequestPending: false,
  productRequestError: false,
  productRequestErrorDetails: null,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PENDING:
      return {
        ...state,
        productRequestPending: action.payload,
      };
    case SET_ERROR:
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
    dispatch(setPending(true));
    try {
      return await fetch(API_URL)
        .then(res => res.json())
        .then(body => dispatch(fetchProductSuccess(body)))
        .catch(err => dispatch(fetchProductFailed(err.toString())))
    } catch (err) {
      dispatch(fetchProductFailed(err))
    }
  };
};

export const setPending = (pending) => {
  return {
    type: SET_PENDING,
    pending
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

const fetchProductFailed = (error) => {
  return {
    type: SET_ERROR,
    payload: {
      error
    }
  };
};
