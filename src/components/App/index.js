// == Initialisation
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// == Style
import './styles.scss';

// == Component
import HomePage from 'src/components/HomePage';
import MapPage from 'src/components/MapPage';

import {
  getVehiclesData,
  getCategoriesData,
} from 'src/actions/mapSettings';

// == Composant
function App() {
  const dispatch = useDispatch();
  const isConnected = useSelector((state) => state.auth.isConnected);
  useEffect(() => {
    dispatch(getVehiclesData());
    dispatch(getCategoriesData());
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/map" element={<MapPage />} />
    </Routes>
  );
}

// == Export
export default App;
