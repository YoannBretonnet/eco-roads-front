import {
  GET_ROUTE,
  GET_ROUTE_SUCCESS,
  GET_ROUTE_FAIL,
} from 'src/actions/mapData';



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
              ...action.data,
            ],
          },
        },
         status: {
          ...state.status,
          isLoading: false,
          isMapGenerated: true,
        },
      };
    case GET_ROUTE_FAIL:
      return {
        ...state,
        status: {
          ...state.pointCoords.status,
          isLoading: false,
          error: {
            isError: true,
            message: action.message,
          },
        },
      };
    default:
      return state;
  }
};

export default reducer;



// const reducer = (state = initialState, action = {}) => {
//   switch (action.type) {
//     case GET_ROUTE:
//       return {
//         ...state,
//         status: {
//           ...state.status,
//           isLoading: true,
//           error: {
//             isError: false,
//             message: undefined,
//           },
//         },
//       };
//     case GET_ROUTE_SUCCESS:
//       return {
//         ...state,
//         startEndCoords: {
//           stLong: action.data.waypoints.departure[0],
//           stLat: action.data.waypoints.departure[1],
//           arLong: action.data.waypoints.arrival[0],
//           arLat: action.data.waypoints.arrival[1],
//         },
//         pointCoords: {
//           ...state.pointCoords,
//           data: {
//             ...state.pointCoords.data,
//             features: [
//               ...action.data.road,
//             ],
//           },
//         },
//         userInfo: {
//           ...action.data.userInfo,
//         },
//         status: {
//           ...state.status,
//           isLoading: false,
//           isMapGenerated: true,
//         },
//       };
//     case GET_ROUTE_FAIL:
//       return {
//         ...state,
//         status: {
//           ...state.pointCoords.status,
//           isLoading: false,
//           error: {
//             isError: true,
//             message: action.message,
//           },
//         },
//       };
//     default:
//       return state;
//   }
// };

// export default reducer;
