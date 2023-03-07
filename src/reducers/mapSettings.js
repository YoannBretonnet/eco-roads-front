/* eslint-disable max-len */
/* eslint-disable no-else-return */
// == Actions
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
  CLEAR_MAP_SETTINGS,
} from 'src/actions/mapSettings';

// == State
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

// == Composant
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
            street_number: (parseInt(action.properties.housenumber, 10) ? parseInt(action.properties.housenumber, 10) : undefined),
            address: (action.properties.street ? action.properties.street : action.properties.label),
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
            ...state.interestPointModal.selected.filter((option) => option.name !== action.selectedOption.name),
          ],
        },
      };
    case CLEAR_MAP_SETTINGS:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;
