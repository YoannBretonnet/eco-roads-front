/* eslint-disable max-len */
export const OPEN_CLOSE_CAR_MODAL = 'OPEN_CLOSE_CAR_MODAL';
export const CHANGE_MAP_SETTING_INPUT_VALUE = 'CHANGE_MAP_SETTING_INPUT_VALUE';
export const OPEN_CLOSE_LOCALISATION_MODAL = 'OPEN_CLOSE_LOCALISATION_MODAL';
export const UPDATE_LIST_OF_LOCALISATION = 'UPDATE_LIST_OF_LOCALISATION';
export const UPDATE_LIST_OF_LOCALISATION_SUCCESS = 'UPDATE_LIST_OF_LOCALISATION_SUCCESS';
export const UPDATE_LIST_OF_LOCALISATION_FAIL = 'UPDATE_LIST_OF_LOCALISATION_FAIL';
export const CHANGE_MAP_SETTING_AUTOCOMPLETE_VALUE = 'CHANGE_MAP_SETTING_AUTOCOMPLETE_VALUE';
export const UPDATE_LIST_OF_LOCALISATION_ABORT = 'UPDATE_LIST_OF_LOCALISATION_ABORT';
export const OPEN_CLOSE_INTEREST_POINT_MODAL = 'OPEN_CLOSE_INTEREST_POINT_MODAL';
export const SELECT_INTEREST_POINT = 'SELECT_INTEREST_POINT';
export const SELECT_INTEREST_POINT_DELETE = 'SELECT_INTEREST_POINT_DELETE';
export const SELECT_INTEREST_POINT_ADD = 'SELECT_INTEREST_POINT_ADD';
export const GET_VEHICLES_DATA = 'GET_VEHICLES_DATA';
export const GET_VEHICLES_DATA_SUCCESS = 'GET_VEHICLES_DATA_SUCCESS';
export const GET_VEHICLES_DATA_FAIL = 'GET_VEHICLES_DATA_FAIL';
export const GET_CATEGORIES_DATA = 'GET_CATEGORIES_DATA';

export const openCloseLocalisationModal = () => ({
  type: OPEN_CLOSE_LOCALISATION_MODAL,
});

export const openCloseCarModal = () => ({
  type: OPEN_CLOSE_CAR_MODAL,
});

export const openCloseInterestPointModal = () => ({
  type: OPEN_CLOSE_INTEREST_POINT_MODAL,
});

export const changeMapSettingInputValue = (inputValue, inputElement, modalElement) => ({
  type: CHANGE_MAP_SETTING_INPUT_VALUE,
  inputValue,
  inputElement,
  modalElement,
});

export const updateListOfLocalisation = (inputValue, inputElement, loadingElement, propositionElement) => ({
  type: UPDATE_LIST_OF_LOCALISATION,
  inputValue,
  inputElement,
  loadingElement,
  propositionElement,
});

export const updateListOfLocalisationSuccess = (data, propositionElement, loadingElement) => ({
  type: UPDATE_LIST_OF_LOCALISATION_SUCCESS,
  data,
  propositionElement,
  loadingElement,
});

export const updateListOfLocalisationFail = (data, propositionElement, loadingElement) => ({
  type: UPDATE_LIST_OF_LOCALISATION_FAIL,
  data,
  propositionElement,
  loadingElement,
});

export const changeMapSettingAutocompleteValue = ({ properties, geometry }, inputElement, modalElement) => ({
  type: CHANGE_MAP_SETTING_AUTOCOMPLETE_VALUE,
  properties,
  geometry,
  inputElement,
  modalElement,
});

export const updateListOfLocalisationAbort = (loadingElement) => ({
  type: UPDATE_LIST_OF_LOCALISATION_ABORT,
  loadingElement,
});

export const selectInterestPoint = (boolean, selectedOption) => ({
  type: SELECT_INTEREST_POINT,
  boolean,
  selectedOption,
});

export const selectInterestPointDelete = (selectedOption) => ({
  type: SELECT_INTEREST_POINT_DELETE,
  selectedOption,
});

export const selectInterestPointAdd = (selectedOption) => ({
  type: SELECT_INTEREST_POINT_ADD,
  selectedOption,
});

export const getVehiclesData = () => ({
  type: GET_VEHICLES_DATA,
});

export const getVehiclesDataSuccess = (brands, cars) => ({
  type: GET_VEHICLES_DATA_SUCCESS,
  brands,
  cars,
});

export const getVehiclesDataFail = (message) => ({
  type: GET_VEHICLES_DATA_FAIL,
  message,
});

export const getCategoriesData = () => ({
  type: GET_CATEGORIES_DATA,
});
