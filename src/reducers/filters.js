import {
  SET_BRANDS_PENDING,
  SET_BRANDS_ERROR,
  SET_BRANDS,
  SET_BRAND,
  SET_NAME,
} from "./actionTypes";
import { generateSetFromList } from "../helpers";

const initialState = {
  name: "",
  brands: ["almay"],
  brand: "almay",
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
        name: "",
        brands: action.payload.data,
        brandsRequestError: false,
        brandsRequestErrorDetails: null,
        brandsRequestPending: false,
      };
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
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

// same way we may generate categories, tags lists etc and create more filters of thhat type.
export const fetchBrands = (arr, field) => {
  return dispatch => {
    try {
      dispatch(setBrandsPending());
      const brandsSet = generateSetFromList(arr, field);
      if (brandsSet?.length > 1) return dispatch(setBrandsSuccess(brandsSet));
      return dispatch(setBrandsFailed("Set build failed"));
    } catch (err) {
      dispatch(setBrandsFailed(err.toString()));
    }
  };
};

const setBrandsPending = () => {
  return {
    type: SET_BRANDS_PENDING,
  };
};

const setBrandsFailed = error => {
  return {
    type: SET_BRANDS_ERROR,
    payload: {
      error,
    },
  };
};

const setBrandsSuccess = data => {
  return {
    type: SET_BRANDS,
    payload: {
      data,
    },
  };
};

export const setBrand = payload => {
  return {
    type: SET_BRAND,
    payload,
  };
};

export const setName = payload => {
  return {
    type: SET_NAME,
    payload,
  };
};
