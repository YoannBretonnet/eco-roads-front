/* eslint-disable no-else-return */
import {
  OPEN_CLOSE_CAR_MODAL,
  OPEN_CLOSE_LOCALISATION_MODAL,
  CHANGE_MAP_SETTING_INPUT_VALUE,
  UPDATE_LIST_OF_LOCALISATION,
  UPDATE_LIST_OF_LOCALISATION_SUCCESS,
  CHANGE_MAP_SETTING_AUTOCOMPLETE_VALUE,
  UPDATE_LIST_OF_LOCALISATION_ABORT,
  UPDATE_LIST_OF_LOCALISATION_FAIL,
  OPEN_CLOSE_INTEREST_POINT_MODAL,
  SELECT_INTEREST_POINT_ADD,
  SELECT_INTEREST_POINT_DELETE,
  GET_VEHICLES_DATA,
  GET_VEHICLES_DATA_SUCCESS,
  GET_VEHICLES_DATA_FAIL,
  GET_CATEGORIES_DATA,
  GET_CATEGORIES_DATA_SUCCESS,
  GET_CATEGORIES_DATA_FAIL,
  CLEAR_MAP_SETTINGS,
} from 'src/actions/mapSettings';

import { GET_PROFIL_SUCCESS } from 'src/actions/authentification';

export const initialState = {
  carSettingsModal: {
    isOpen: false,
    brandsValue: 5,
    carValue: 11,
  },
  localisationSettingsModal: {
    isOpen: false,
    isDepartLoading: false,
    DepartSelected: {
      label: '',
      street_number: undefined,
      address: undefined,
      zipcode: undefined,
      city: undefined,
      Lat: undefined,
      Long: undefined,
    },
    DepartProposition: [],
    isArrivLoading: false,
    ArrivSelected: {
      label: '',
      street_number: undefined,
      address: undefined,
      zipcode: undefined,
      city: undefined,
      Lat: undefined,
      Long: undefined,
    },
    ArrivProposition: [],
  },
  interestPointModal: {
    isOpen: false,
    selected: [],
  },
  vehiclesData: {
    brands: [],
    cars: [],
    isLoading: false,
    error: {
      isError: false,
      message: undefined,
    },
  },
  categoriesData: {
    list: [],
    isLoading: false,
    error: {
      isError: false,
      message: undefined,
    },
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_CLOSE_CAR_MODAL:
      return {
        ...state,
        carSettingsModal: {
          ...state.carSettingsModal,
          isOpen: !state.carSettingsModal.isOpen,
        },
      };
    case OPEN_CLOSE_LOCALISATION_MODAL:
      return {
        ...state,
        localisationSettingsModal: {
          ...state.localisationSettingsModal,
          isOpen: !state.localisationSettingsModal.isOpen,
          DepartProposition: [],
          ArrivProposition: [],
        },
      };
    case OPEN_CLOSE_INTEREST_POINT_MODAL:
      return {
        ...state,
        interestPointModal: {
          ...state.interestPointModal,
          isOpen: !state.interestPointModal.isOpen,
        },
      };
    case CHANGE_MAP_SETTING_INPUT_VALUE:
      return {
        ...state,
        [action.modalElement]: {
          ...state[action.modalElement],
          [action.inputElement]: action.inputValue,
        },
      };
    case UPDATE_LIST_OF_LOCALISATION:
      return {
        ...state,
        localisationSettingsModal: {
          ...state.localisationSettingsModal,
          [action.loadingElement]: true,
          [action.inputElement]: {
            ...state.localisationSettingsModal[action.inputElement],
            label: action.inputValue,
            street_number: undefined,
            address: undefined,
            zipcode: undefined,
            city: undefined,
            Lat: undefined,
            Long: undefined,
          },
        },
      };
    case UPDATE_LIST_OF_LOCALISATION_SUCCESS:
      return {
        ...state,
        localisationSettingsModal: {
          ...state.localisationSettingsModal,
          [action.loadingElement]: false,
          [action.propositionElement]: action.data.features,
        },
      };
    case UPDATE_LIST_OF_LOCALISATION_FAIL:
      return {
        ...state,
        localisationSettingsModal: {
          ...state.localisationSettingsModal,
          [action.loadingElement]: false,
          [action.propositionElement]: [],
        },
      };
    case CHANGE_MAP_SETTING_AUTOCOMPLETE_VALUE:
      return {
        ...state,
        [action.modalElement]: {
          ...state[action.modalElement],
          [action.inputElement]: {
            label: action.properties.label,
            street_number: parseInt(action.properties.housenumber, 10),
            address: action.properties.street,
            zipcode: parseInt(action.properties.postcode, 10),
            city: action.properties.city,
            Lat: action.geometry.coordinates[1],
            Long: action.geometry.coordinates[0],
          },
        },
      };
    case UPDATE_LIST_OF_LOCALISATION_ABORT:
      return {
        ...state,
        localisationSettingsModal: {
          ...state.localisationSettingsModal,
          [action.loadingElement]: false,
        },
      };
    case SELECT_INTEREST_POINT_ADD:
      return {
        ...state,
        interestPointModal: {
          ...state.interestPointModal,
          selected: [
            ...state.interestPointModal.selected,
            action.selectedOption,
          ],
        },
      };
    case SELECT_INTEREST_POINT_DELETE:
      return {
        ...state,
        interestPointModal: {
          ...state.interestPointModal,
          selected: [
            // eslint-disable-next-line max-len
            ...state.interestPointModal.selected.filter((option) => option.id !== action.selectedOption.id),
          ],
        },
      };
    case GET_VEHICLES_DATA:
      return {
        ...state,
        vehiclesData: {
          ...state.vehiclesData,
          isLoading: true,
        },
      };
    case GET_VEHICLES_DATA_SUCCESS:
      return {
        ...state,
        vehiclesData: {
          ...state.vehiclesData,
          brands: action.brands,
          cars: action.cars,
          isLoading: false,
        },
      };
    case GET_VEHICLES_DATA_FAIL:
      return {
        ...state,
        vehiclesData: {
          ...state.vehiclesData,
          isLoading: false,
          error: {
            isError: true,
            message: action.message,
          },
        },
      };
    case GET_CATEGORIES_DATA:
      return {
        ...state,
        categoriesData: {
          ...state.categoriesData,
          isLoading: true,
        },
      };
    case GET_CATEGORIES_DATA_SUCCESS:
      return {
        ...state,
        categoriesData: {
          ...state.categoriesData,
          list: action.list,
          isLoading: false,
        },
      };
    case GET_CATEGORIES_DATA_FAIL:
      return {
        ...state,
        categoriesData: {
          ...state.categoriesData,
          isLoading: false,
          error: {
            isError: true,
            message: action.message,
          },
        },
      };
    case CLEAR_MAP_SETTINGS:
      return {
        ...initialState,
      };
    case GET_PROFIL_SUCCESS:
      if (action.data.car || action.data.location || action.data.categories) {
        return {
          ...state,
          carSettingsModal: {
            ...state.carSettingsModal,
            brandsValue: action.data.car.brand_id,
            carValue: action.data.car.car_id,
          },
          interestPointModal: {
            ...state.interestPointModal,
            selected: [
              ...action.data.categories.map((option) => ({
                id: option.id,
                name: option.category,
              })),
            ],
          },
          localisationSettingsModal: {
            ...state.localisationSettingsModal,
            DepartSelected: {
              ...action.data.location,
            },
          },
        };
      }
      else {
        return {
          ...state,
        };
      }
    default:
      return state;
  }
};

export default reducer;
