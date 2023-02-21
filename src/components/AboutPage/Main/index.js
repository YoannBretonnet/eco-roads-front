import { useState } from 'react';

// == Style
import './styles.scss';
import {
  Box,
  IconButton,
  Tooltip,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { useSelector, useDispatch } from 'react-redux';

import {
  BiUser,
  BiDotsVerticalRounded,
} from 'react-icons/bi';

import CarouselComponent from './CarouselAbout';
import StepsComponent from './StepsComponentAbout';

// == Composant
function Main() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('laptop'));
  const matchesTablet = useMediaQuery(theme.breakpoints.down('tablet'));
  const dispatch = useDispatch();
   const args = {
    size: 6,
  };
  const [inputMenu, setinputMenu] = useState(null);
  const handleClick = (event) => {
    dispatch(openCloseMenu(true));
    setinputMenu(event.currentTarget);
  };
  // display: 'flex', flexDirection: 'row-reverse', margin: '10vh 0 15vh'
  return (
    <Box component="main" id="main-AboutPage">
      <Box component="section" sx={{ margin: '4vh 0 0' }}>

        <h1 className="about-title">
          L'équipe E-co Roads
        </h1>

        {matches ? <CarouselComponent /> : <StepsComponent />}

        <h2 className="about-title">
          Contactez-nous
        </h2>
        <p className="about-accroche">
          <a href="mailto: hello@eco-roads.com">hello@eco-roads.com</a>
        </p>
      </Box>
         </Box>
  );
}

// == Export
export default Main;
