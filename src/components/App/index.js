// == Initialisation
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

// == Style
import './styles.scss';
import { ThemeProvider } from '@mui/material';
import theme from 'src/styles/styles';

// == Components
import HomePage from 'src/components/HomePage';
import NotFoundPage from 'src/components/NotFoundPage';
import MapPage from 'src/components/MapPage';
import AboutPage from 'src/components/AboutPage';
import ProfilePage from 'src/components/ProfilePage';

// == Composant
function App() {
  const isMapGenerated = useSelector((state) => state.mapData.status.isMapGenerated);
  const isConnected = useSelector((state) => state.auth.connectionModal.isConnected)

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route key="homePage" path="/" element={<HomePage />} />
          {
          isMapGenerated && (
            <Route key="map" path="/map" element={<MapPage />} />
          )
          }
          {
          isConnected && (
            <Route key="profile" path="/profile" element={<ProfilePage />} />
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
