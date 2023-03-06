/* eslint-disable no-case-declarations */
// == Actions
import {
  SELECT_INTEREST_POINT,
  selectInterestPointDelete,
  selectInterestPointAdd,
} from 'src/actions/mapSettings';

// == Composant
const getLocalisation = (store) => (next) => (action) => {
  switch (action.type) {
    case SELECT_INTEREST_POINT:
      next(action);
      if (action.boolean) {
        store.dispatch(selectInterestPointAdd(action.selectedOption));
      }
      else {
        store.dispatch(selectInterestPointDelete(action.selectedOption));
      }
      break;
    default:
      return next(action);
  }
};

export default getLocalisation;
