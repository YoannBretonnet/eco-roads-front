import { useSelector, useDispatch } from 'react-redux';
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

import {
  BiUser,
  BiDotsVerticalRounded,
} from 'react-icons/bi';

import Map from './Map';

// == Composant
function Main() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('tablet'));
  const args = {
    size: 6,
  };

  const [inputMenu, setinputMenu] = useState(null);
  const handleClick = (event) => {
    dispatch(openCloseMenu(true));
    setinputMenu(event.currentTarget);
  };

  return (
    <Box component="main" id="main-MapPage">
      <Map />
    </Box>
  );
}

// == Export
export default Main;
