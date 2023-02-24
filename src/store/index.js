import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import getLocalisation from 'src/middlewares/getLocalisation';
import getSelectedInterestPoint from 'src/middlewares/getSelectedInterestPoint';
import getRouteMiddleware from 'src/middlewares/getRouteMiddleware';
import connectUser from 'src/middlewares/connectUser';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(
    getLocalisation,
    getSelectedInterestPoint,
    getRouteMiddleware,
    connectUser,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
