// == Style
import './styles.scss';


import {
  Box,
  IconButton,
  Tooltip,
} from '@mui/material';

import {
  BiUser,
} from 'react-icons/bi';

import {
  openCloseConnectionModal
} from 'src/actions/authentification';

// == Component
import Header from 'src/components/Header';
import Main from 'src/components/MapPage/Main';
import Footer from 'src/components/Footer';


import 'mapbox-gl/dist/mapbox-gl.css';

// == Composant

function MapPage() {
  const handleClick = (event) => {
    dispatch(openCloseConnectionModal());
    setinputMenu(event.currentTarget);
  };
  const args = {
    size: 6,
  };
  return (
    
    <>
      <Header />
      <Main />
      <Footer />
             
     </>
  );
}

// == Export
export default MapPage;
