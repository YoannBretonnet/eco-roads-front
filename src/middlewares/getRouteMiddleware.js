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
          "categories": state.mapSettings.interestPointModal.selected.map((category) => category.name)
        },
      };
      axios(configGetInterestPoints)
        .then(({data} ) => {
          // console.log(data)
          store.dispatch(getRouteSuccess(data));
        })
        .catch((error) => {
          // store.dispatch(getRouteFail(Object.values(error.response.data)[0]));
          console.log('route failed', error);
        });
      break;
    case GET_ROUTE_SUCCESS:
      next(action);
      store.dispatch(openCloseInterestPointModal());
      history.replace('/map');
      break;
    default:
      return next(action);
  }
};

export default connectUser;