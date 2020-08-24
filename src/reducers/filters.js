import {
  SET_BRANDS_PENDING,
  SET_BRANDS_ERROR,
  SET_BRANDS,
  SET_BRAND,
  SET_NAME,
} from './actionTypes';
import { generateSetFromList } from '../helpers'

const initialState = {
  name: null,
  brands: ['almay'],
  brand: 'almay',
  brandsRequestPending: false,
  brandsRequestError: false,
  brandsRequestErrorDetails: null,
};

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BRANDS_PENDING:
      return {
        ...state,
        brandsRequestPending: true,
      };
    case SET_BRANDS_ERROR:
      return {
        ...state,
        brands: [],
        brandsRequestError: true,
        brandsRequestErrorDetails: action.payload.error,
        brandsRequestPending: false,
      };
    case SET_BRANDS:
      return {
        ...state,
        brands: action.payload.data,
        brandsRequestError: false,
        brandsRequestErrorDetails: null,
        brandsRequestPending: false,
      };
    case SET_NAME:
      return {
        ...state,
        NAME: action.payload,
      };
    case SET_BRAND:
      return {
        ...state,
        brand: action.payload,
      };
    default:
      return state;
  }
}

export const fetchBrands = (arr, field) => {
  return dispatch => {
    try {
      dispatch(setBrandsPending())
      return dispatch(setBrandsSuccess(generateSetFromList(arr, field)))
    } catch (err) {
      dispatch(setBrandsFailed(err.toString()))
    }
  };
};

const setBrandsPending = () => {
  return {
    type: SET_BRANDS_PENDING,
  };
};

const setBrandsFailed = (error) => {
  return {
    type: SET_BRANDS_ERROR,
    payload: {
      error
    }
  };
};

const setBrandsSuccess = (data) => {
  return {
    type: SET_BRANDS,
    payload: {
      data
    }
  };
};

export const setBrand = (data) => {
  return {
    type: SET_BRAND,
    payload: {
      data
    }
  };
};

export const setName = (data) => {
  return {
    type: SET_NAME,
    payload: {
      data
    }
  };
};
