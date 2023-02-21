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
    <Box component="main" id="main-HomePage">
      <Map />
      {matches ? (
        <Box
          component="section"
          sx={{
            position: 'fixed', right: '0', bottom: '0', top: 'unset', width: 'fit-content',
          }}
        >
          {
     (
          <>
            <Tooltip title="Settings">
              <IconButton
                onClick={handleClick}
                aria-haspopup="true"
              >
                <BiDotsVerticalRounded size={`${args.size}vh`} />
              </IconButton>
            </Tooltip>
              </>
        )
      }
        </Box>
      ) : (
        <Box
          component="section"
          sx={{
            position: 'fixed', right: '0', bottom: 'unset', top: '0', width: 'fit-content',
          }}
        >
          {
            (
          <>
            <Tooltip title="Paramètre">
              <IconButton
                onClick={handleClick}
                aria-haspopup="true"
              >
                <BiDotsVerticalRounded size={`${args.size}vh`} />
              </IconButton>
            </Tooltip>
              </>
        )
      }
        </Box>
      )}
    </Box>
  );
}

// == Export
export default Main;
