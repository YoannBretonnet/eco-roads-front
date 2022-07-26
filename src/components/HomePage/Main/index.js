// == Style
import './styles.scss';
import { Box, IconButton, Tooltip } from '@mui/material';

import CarouselComponent from 'src/components/Carousel';

import { useSelector, useDispatch } from 'react-redux';
import { openCloseConnectionModal } from 'src/actions/authentification';

import {
  BiUser,
  BiDotsVerticalRounded,
} from 'react-icons/bi';

// == Composant
function Main() {
  const dispatch = useDispatch();
  const isConnected = useSelector((state) => state.auth.isConnected);
  const args = {
    size: '6vh',
  };
  return (
    <Box component="main">
      <Box component="section" sx={{ margin: '32vh 1.5vh 0' }}>
        <h1 className="main-title">
          E-co Roads
        </h1>
        <p className="main-accroche">
          Découvrez votre région en toute sérénité au volant de votre voiture électrique
        </p>
      </Box>
      <CarouselComponent />
      <Box
        component="section"
        sx={{
          position: 'fixed', right: '1vw', top: '92vh', width: 'fit-content',
        }}
      >
        {
        !isConnected ? (
          <IconButton
            onClick={() => dispatch(openCloseConnectionModal())}
          >
            <BiUser size={args.size} />
          </IconButton>
        ) : (
          <Tooltip title="Settings">
            <IconButton
              // onClick={}
              // aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              // aria-expanded={open ? 'true' : undefined}
            >
              <BiDotsVerticalRounded size={args.size} />
            </IconButton>
          </Tooltip>
        )
      }
      </Box>
    </Box>
  );
}

// == Export
export default Main;
