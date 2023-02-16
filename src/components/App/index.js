// == Initialisation
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// == Style
import './styles.scss';
import { ThemeProvider } from '@mui/material';
import theme from 'src/styles/styles';

// == Component
import HomePage from 'src/components/HomePage';
import ProfilePage from 'src/components/ProfilePage';
import NotFoundPage from 'src/components/NotFoundPage';
import MapPage from 'src/components/MapPage';
import AboutPage from 'src/components/AboutPage';

import {
  getVehiclesData,
  getCategoriesData,
} from 'src/actions/mapSettings';

import {
  getTeamData,
} from 'src/actions/usability';




// == Composant
function App() {
  const dispatch = useDispatch();
  const isConnected = useSelector((state) => state.auth.isConnected);
  const isMapGenerated = useSelector((state) => state.mapData.status.isMapGenerated);
  useEffect(() => {
    dispatch(getVehiclesData());
    dispatch(getCategoriesData());
    dispatch(getTeamData());
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route key="homePage" path="/" element={<HomePage />} />
        {
          isConnected && (
            <Route key="profile" path="/profile" element={<ProfilePage />} />
          )
        }
        {
          isMapGenerated && (
            <Route key="map" path="/map" element={<MapPage />} />
          )
        }
        <Route key="about" path="/about" element={<AboutPage />} />
        <Route key="*" path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
}

// == Export
export default App;
