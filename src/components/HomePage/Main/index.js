import { useState } from 'react';

// == Style
import './styles.scss';
import {
  Box,
  useMediaQuery,
} from '@mui/material';

import { useTheme } from '@mui/material/styles';

import { useDispatch } from 'react-redux';

import {
  openCloseConnectionModal
} from 'src/actions/authentification';

import CarouselComponent from 'src/components/Carousel';
import StepsComponent from 'src/components/StepsComponent';

// == Composant
function Main() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('tablet'));
  const dispatch = useDispatch();
  const args = {
    size: 6,
  };
  const [inputMenu, setinputMenu] = useState(null);
  const handleClick = (event) => {
    dispatch(openCloseConnectionModal());
    setinputMenu(event.currentTarget);
  };
  // display: 'flex', flexDirection: 'row-reverse', margin: '10vh 0 15vh'
  return (
    
    <>
    <Box component="main" id="main-HomePage">
       {matches ? <CarouselComponent /> : <StepsComponent />}
       </Box>
       </>
  );
}

// == Export
export default Main;
