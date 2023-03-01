// == Initialisation
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// == Style
import './styles.scss';
import { ThemeProvider } from '@mui/material';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import theme from 'src/styles/styles';

// == Component
import HomePage from 'src/components/HomePage';
import NotFoundPage from 'src/components/NotFoundPage';
import MapPage from 'src/components/MapPage';
import AboutPage from 'src/components/AboutPage';

// == Composant
function App() {
  const isMapGenerated = useSelector((state) => state.mapData.status.isMapGenerated);

  useEffect(() => {
    // dispatch(getVehiclesData());
    // dispatch(getCategoriesData());
    // dispatch(getTeamData());
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route key="homePage" path="/" element={<HomePage />} />
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
