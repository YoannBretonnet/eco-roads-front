/* eslint-disable no-case-declarations */
// == Initialisation
import axios from 'axios';

// == Actions
import {
  UPDATE_LIST_OF_LOCALISATION,
  updateListOfLocalisationSuccess,
  updateListOfLocalisationFail,
  updateListOfLocalisationAbort,
} from 'src/actions/mapSettings';

// == Composant
const getLocalisation = (store) => (next) => (action) => {
  switch (action.type) {
    case UPDATE_LIST_OF_LOCALISATION:
      next(action);
      if (action.inputValue !== '') {
        const config = {
          method: 'get',
          url: `https://api-adresse.data.gouv.fr/search/?q=${action.inputValue.replace(/\s/g, '+')}`,
        };
        axios(config)
          .then((response) => {
            store.dispatch(updateListOfLocalisationSuccess(response.data, action.propositionElement, action.loadingElement));
          })
          .catch((_error) => {
            store.dispatch(updateListOfLocalisationFail(action.propositionElement, action.loadingElement));
          });
      }
      else {
        store.dispatch(updateListOfLocalisationAbort(action.loadingElement));
      }
      break;
    default:
      return next(action);
  }
};

export default getLocalisation;
