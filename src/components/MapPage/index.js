// == Style
import './styles.scss';


import {
  Box
} from '@mui/material';

// == Component
import Header from 'src/components/Header';
import Main from 'src/components/MapPage/Main';
import Footer from 'src/components/Footer';

import 'mapbox-gl/dist/mapbox-gl.css';

// == Composant

function MapPage() {
  const reducerRoute = 'auth';

  return (
    
    <>
       <Box component="section" sx={{ margin: '2vh 1.5vh 0', position: 'fixed', left: '0', bottom: 'unset', top: '0', width: 'fit-content', }}>
            <h1 className="main-title">
              E-co Roads
            </h1>
      </Box>
      <Header />
      <Main />
      <Footer />
     </>
  );
}

// == Export
export default MapPage;
