/* eslint-disable no-case-declarations */
// == Initialisation
import axios from 'axios';

// == Actions
import {
  GET_CATEGORIES_DATA,
  getCategoriesData,
  getCategoriesDataSuccess,
  CLEAR_MAP_SETTINGS,
} from 'src/actions/mapSettings';

// == Composant
const getCategoriesDataMiddlewares = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_CATEGORIES_DATA:
      next(action);
      const config = {
        method: 'get',
        url: 'https://eco-roads.herokuapp.com/api/v1/categories',
      };
      axios(config)
        .then((response) => {
          store.dispatch(getCategoriesDataSuccess(response.data));
        })
        .catch((error) => {
          console.log(error);
          // store.dispatch(getCategoriesDataFail(Object.values(error.response.data)[0]));
        });
      break;
    case CLEAR_MAP_SETTINGS:
      next(action);
      store.dispatch(getCategoriesData());
      break;
    default:
      return next(action);
  }
};

export default getCategoriesDataMiddlewares;
