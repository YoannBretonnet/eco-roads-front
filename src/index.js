// == Initialisation
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Router  } from 'react-router-dom';
import { useState, useLayoutEffect } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import customHistory from './history.js';

// == Components
import App from 'src/components/App';
import store from 'src/store';

// Composant
const CustomRouter = ({ history, ...props }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      {...props}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};

const rootReactElement = (
  <Provider store={store}>
    <CustomRouter history={customHistory}>
      <App />
    </CustomRouter>
  </Provider>
);

const root = createRoot(document.getElementById('root'));

root.render(rootReactElement);
