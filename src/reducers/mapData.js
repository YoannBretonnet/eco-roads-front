// == Actions
import {
  GET_ROUTE,
  GET_ROUTE_SUCCESS,
} from 'src/actions/mapData';

// == State
export const initialState = {
  startEndCoords: {
    stLong: undefined,
    stLat: undefined,
    arLong: undefined,
    arLat: undefined,
  },
  pointCoords: {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [],
    },
  },
  userInfo: {
    car: {
      brand_id: undefined,
      brandname: undefined,
      id: undefined,
      model: undefined,
      image: undefined,
      name: undefined,
    },
    departureAddress: undefined,
    arrivalAddress: undefined,
    categories: [],
  },
  status: {
    isLoading: false,
    isMapGenerated: true,
    error: {
      isError: false,
      message: undefined,
    },
  },
};

// == Composant
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ROUTE:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: true,
          error: {
            isError: false,
            message: undefined,
          },
        },
      };
    case GET_ROUTE_SUCCESS:
      return {
        ...state,
        pointCoords: {
          ...state.pointCoords,
          data: {
            ...state.pointCoords.data,
            features: [
              ...action.data.arrayResponse  ,
            ],
          },
        },
         status: {
          ...state.status,
          isLoading: false,
          isMapGenerated: true,
        },
      };
    default:
      return state;
  }
};

export default reducer;

