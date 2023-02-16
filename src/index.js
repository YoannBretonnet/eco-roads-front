// == Import : npm
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Router  } from 'react-router-dom';
import { useState, useLayoutEffect } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';

// == Import : local
// Composants
import App from 'src/components/App';
import store from 'src/store';

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

import customHistory from './history.js';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <Provider store={store}>
    <CustomRouter history={customHistory}>
      <App />
    </CustomRouter>
  </Provider>
);

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const root = createRoot(document.getElementById('root'));

// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
root.render(rootReactElement);
