import {
  SET_LIST_PENDING,
  SET_LIST_ERROR,
  SET_LIST,
  SET_FILTERED_PENDING,
  SET_FILTERED_ERROR,
  SET_FILTERED,
} from './actionTypes';
import { LIST_URL, LIST_DEFAULT_URL } from '../config';

const initialState = {
  list: [],
  listRequestPending: false,
  listRequestError: false,
  listRequestErrorDetails: null,
  filtered: [],
  filteredRequestPending: false,
  filteredRequestError: false,
  filteredRequestErrorDetails: null,
};

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LIST_PENDING:
      return {
        ...state,
        listRequestPending: true,
      };
    case SET_LIST_ERROR:
      return {
        ...state,
        list: [],
        listRequestError: true,
        listRequestErrorDetails: action.payload.error,
        listRequestPending: false,
      };
    case SET_LIST:
      return {
        ...state,
        list: action.payload.data,
        listRequestError: false,
        listRequestErrorDetails: null,
        listRequestPending: false,
      };
    case SET_FILTERED_PENDING:
      return {
        ...state,
        filteredRequestPending: true,
      };
    case SET_FILTERED_ERROR:
      return {
        ...state,
        filtered: [],
        filteredRequestError: true,
        filteredRequestErrorDetails: action.payload.error,
        filteredRequestPending: false,
      };
    case SET_FILTERED:
      return {
        ...state,
        filtered: action.payload.data,
        filteredRequestError: false,
        filteredRequestErrorDetails: null,
        filteredRequestPending: false,
      };
    default:
      return state;
  }
}

export const fetchList = () => {
  return async dispatch => {
    try {
      dispatch(setListPending());
      return await fetch(LIST_URL)
        .then(res => res.json())
        .then(body => dispatch(fetchListSuccess(body)))
        .catch(err => dispatch(fetchListFailed(err.toString())))
    } catch (err) {
      dispatch(fetchListFailed(err))
    }
  };
};

export const setListPending = () => {
  return {
    type: SET_LIST_PENDING,
  };
};

const fetchListFailed = (error) => {
  return {
    type: SET_LIST_ERROR,
    payload: {
      error
    }
  };
};

const fetchListSuccess = (data) => {
  return {
    type: SET_LIST,
    payload: {
      data
    }
  };
};

export const fetchFiltered = () => {
  return async dispatch => {
    try {
      dispatch(setFilteredPending());
      return await fetch(LIST_DEFAULT_URL)
        .then(res => res.json())
        .then(body => dispatch(fetchFilteredSuccess(body)))
        .catch(err => dispatch(fetchFilteredFailed(err.toString())))
    } catch (err) {
      dispatch(fetchFilteredFailed(err))
    }
  };
};

export const setFilteredPending = () => {
  return {
    type: SET_FILTERED_PENDING,
  };
};

const fetchFilteredFailed = (error) => {
  return {
    type: SET_FILTERED_ERROR,
    payload: {
      error
    }
  };
};

const fetchFilteredSuccess = (data) => {
  return {
    type: SET_FILTERED,
    payload: {
      data
    }
  };
};
