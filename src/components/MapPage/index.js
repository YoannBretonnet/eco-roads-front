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
      <Box
          component="section"
          sx={{
            position: 'fixed', right: '0', bottom: 'unset', top: '0', width: 'fit-content',
          }}
        >
          {
          <>
            <Tooltip title="Settings">
              <IconButton
                onClick={handleClick}
                aria-haspopup="true"
              >
                <BiUser size={`${args.size}vh`} />
              </IconButton>
            </Tooltip>
                 </>
      }
      </Box>
           
     </>
  );
}

// == Export
export default MapPage;
