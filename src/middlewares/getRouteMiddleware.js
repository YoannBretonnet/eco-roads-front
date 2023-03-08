/* eslint-disable max-len */
/* eslint-disable no-case-declarations */
// == Initialisation
import axios from 'axios';
import history from '../history.js'

// == Actions
import {
  GET_ROUTE,
  GET_ROUTE_SUCCESS,
  getRouteSuccess,
} from 'src/actions/mapData';
import {
  openCloseInterestPointModal,
} from 'src/actions/mapSettings';

// == Composant
const getRoute = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ROUTE:
      next(action);
      const state = store.getState();
      const configGetInterestPoints = {
        method: 'post',
        url: 'https://server-yb.netlify.app/.netlify/functions/api/map',
        headers: { 
          'Content-Type': 'application/json'
        },
        data: {
          "categories": state.mapSettings.interestPointModal.selected.map((category) => category.name)
        },
      };
      axios(configGetInterestPoints)
        .then(({data} ) => {
          store.dispatch(getRouteSuccess(data));
          console.log (data);
        })
        .catch((error) => {
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

export default getRoute;