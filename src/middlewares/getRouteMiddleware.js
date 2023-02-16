/* eslint-disable max-len */
/* eslint-disable no-case-declarations */
import axios from 'axios';
import history from '../history.js'

import {
  GET_ROUTE,
  GET_ROUTE_SUCCESS,
  getRouteSuccess,
  getRouteFail,
} from 'src/actions/mapData';

import {
  openCloseInterestPointModal,
} from 'src/actions/mapSettings';

const connectUser = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ROUTE:
      next(action);
      const state = store.getState();
      const configGetInterestPoints = {
        method: 'post',
        url: 'http://localhost:3001/map',
        headers: { 
          'Content-Type': 'application/json'
        },
        data: {
           categories: state.mapSettings.interestPointModal.selected.map((category) => category.name),
        },
      };
      axios(configGetInterestPoints)
        .then((response ) => {
          // .then((response) => {
          store.dispatch(getRouteSuccess(response));
          console.log('route success');
        })
        .catch((error) => {
          // store.dispatch(getRouteFail(Object.values(error.response.data)[0]));
          console.log('route failed', error);
        });
      break;
    case GET_ROUTE_SUCCESS:
      store.dispatch(openCloseInterestPointModal());
      history.replace('/map');
      next(action);
      break;
    default:
      return next(action);
  }
};

export default connectUser;


// const connectUser = (store) => (next) => (action) => {
//   switch (action.type) {
//     case GET_ROUTE:
//       next(action);
//       const accessToken = localStorage.getItem('accessToken');
//       const state = store.getState();
//       const configGetRoute = {
//         method: 'post',
//         url: 'https://eco-roads.herokuapp.com/api/v1/map',
//         withCredentials: true,
//         headers: accessToken ? ({ 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('accessToken')}` }) : ({ 'Content-Type': 'application/json' }),
//         data: {
//           location: state.mapSettings.localisationSettingsModal.DepartSelected,
//           arrival: state.mapSettings.localisationSettingsModal.ArrivSelected,
//           categories: state.mapSettings.interestPointModal.selected.map((option) => option.id),
//         },
//       };
//       axios(configGetRoute)
//         .then(({ data }) => {
//           store.dispatch(getRouteSuccess(data, action.navigate));
//         })
//         .catch((error) => {
//           store.dispatch(getRouteFail(Object.values(error.response.data)[0]));
//         });
//       break;
//     case GET_ROUTE_SUCCESS:
//       next(action);
//       store.dispatch(openCloseInterestPointModal());
//       action.navigate('/map');
//       break;
//     default:
//       return next(action);
//   }
// };

// export default connectUser;
