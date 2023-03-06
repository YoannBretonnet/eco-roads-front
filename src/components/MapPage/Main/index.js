// == Initialisation
import { useDispatch } from 'react-redux';
import { useState } from 'react';

// == Style
import './styles.scss';
import {
  Box,
} from '@mui/material';

// == Components
import Map from './Map';

// == Composant
function Main() {

  return (
    <Box component="main" id="main-MapPage">
      <Map />
    </Box>
  );
}

// == Export
export default Main;
