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

import { useDispatch } from 'react-redux';

import {
  BiUser,
} from 'react-icons/bi';

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
    dispatch(openCloseMenu(true));
    setinputMenu(event.currentTarget);
  };
  // display: 'flex', flexDirection: 'row-reverse', margin: '10vh 0 15vh'
  return (
    
    <Box component="main" id="main-HomePage">
  
       <Box component="section" sx={{ margin: '2vh 1.5vh 0', position: 'fixed', left: '0', bottom: 'unset', top: '0', width: 'fit-content', }}>
            <h1 className="main-title">
              E-co Roads
            </h1>
      </Box>
      

       {matches ? <CarouselComponent /> : <StepsComponent />}
      {matches ? (
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
      ) : (
        <Box
          component="section"
          sx={{
            position: 'fixed', right: '0', bottom: 'unset', top: '0', width: 'fit-content',
          }}
        >
          {
          <>
            <p>Connexion</p>
              </>
      }
        </Box>
      )}
    </Box>
  );
}

// == Export
export default Main;
