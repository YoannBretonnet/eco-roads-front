import { combineReducers } from 'redux';

import mapSettings from './mapSettings';
import mapData from './mapData';
import auth from './authentification';


const rootReducer = combineReducers({
  mapSettings: mapSettings,
  mapData: mapData,
  auth: auth,
});

export default rootReducer;
