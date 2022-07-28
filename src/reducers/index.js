import { combineReducers } from 'redux';

import authentification from './authentification';
import mapSettings from './mapSettings';
import usability from './usability';
import mapData from './mapData';


const rootReducer = combineReducers({
  auth: authentification,
  mapSettings: mapSettings,
  usability: usability,
  mapData: mapData,
});

export default rootReducer;
