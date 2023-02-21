import { combineReducers } from 'redux';

import mapSettings from './mapSettings';
import mapData from './mapData';


const rootReducer = combineReducers({
  mapSettings: mapSettings,
  mapData: mapData,
});

export default rootReducer;
