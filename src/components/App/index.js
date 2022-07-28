// == Initialisation
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// == Style
import './styles.scss';

// == Component
import HomePage from 'src/components/HomePage';
import MapPage from 'src/components/MapPage';

// == Composant
function App() {
  const isConnected = useSelector((state) => state.auth.isConnected);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/map" element={<MapPage />} />
    </Routes>
  );
}

// == Export
export default App;
