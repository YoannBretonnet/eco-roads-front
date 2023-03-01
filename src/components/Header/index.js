/* eslint-disable max-len */
import { NavLink } from 'react-router-dom';
// == Style
import './styles.scss';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ModalCarSettings from 'src/components/ModalMapSettings/ModalCarSettings';
import ModalLocalisationSettings from 'src/components/ModalMapSettings/ModalLocalisationSettings';
import InterestPointModal from 'src/components/ModalMapSettings/InterestPointModal';
import ModalConnection from '../ModalConnexion';
import Menu from './Menu';
import FloatingMenu from './FloatingMenu'

import { useSelector, useDispatch } from 'react-redux';
import {
  openCloseCarModal,
  openCloseLocalisationModal,
  openCloseInterestPointModal,
} from 'src/actions/mapSettings';

import {
  openCloseConnectionModal,
  openMenu
} from 'src/actions/authentification';

import {
  BiUser,
  BiCar,
  BiMap,
  BiBookmark,
} from 'react-icons/bi';

import styles from './styles.scss?inline';

// == Composant
function Header() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('tablet'));
  const dispatch = useDispatch();
  const { isOpen: isCarOpen } = useSelector((state) => state.mapSettings.carSettingsModal);
  const { isOpen: isLocalisationOpen } = useSelector((state) => state.mapSettings.localisationSettingsModal);
  const { isOpen: isInterestPointOpen } = useSelector((state) => state.mapSettings.interestPointModal);
  const {isConnected : isConnected} = useSelector((state) => state.auth.connectionModal);
  const handleClick = (event) => {
    dispatch(openCloseConnectionModal());
   };
  const handleClickConnected = (event) => {
    dispatch(openMenu());

  }
  const args = {
    size: '4vh',
  };
  const reducerRoute = 'mapSettings';
  return (
    <>
      <Box
        component="header"
        sx={{
          display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '0.5vh',
        }}
      >
           
         <Box component="section" sx={{ margin: '2vh 1.5vh 0', position: 'fixed', left: '0', bottom: 'unset', top: '0', width: 'fit-content', }}>
            <h1 className="main-title">
              E-co Roads
            </h1>
        </Box>
     
        {/* <Menu /> */}
    
        
        <Box
          component="section"
          sx={{
            position: 'fixed', right: '0', bottom: 'unset', top: '0', width: 'fit-content',
          }}
        >
          {
          <>
          {!isConnected ? 
            <Tooltip title="Settings">
              <IconButton
                onClick={handleClick}
                aria-haspopup="true"
              >
                <BiUser size={`6vh`} />
              </IconButton>
            </Tooltip>
            :
           <FloatingMenu />
          }
        </>
      }
      </Box>
           {matches ? ( 
            <Box component="section" sx={{ margin: '8vh 1.5vh 0' }}>
        <Fab variant="extended" aria-label="add" sx={{ display: 'inline', ml: 'auto', mr: 'auto', mt : '2vh', gap: '1vh', fontWeight: 'bold', zindex: '3'}} onClick={(() => dispatch(openCloseCarModal()))}>
          Créez votre trajet personnalisé !
          </Fab>
          <Box component="nav" sx={{ display: 'flex', justifyContent: 'center', marginTop: '0.5vh' }}>
          <Tooltip title="Choix véhicule">
            <IconButton
              className={isCarOpen ? "icon" : ''}
              onClick={(() => dispatch(openCloseCarModal()))}
            >
              <BiCar size={args.size} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Adresses">
            <IconButton
              className={isLocalisationOpen ? "icon" : ''}
              onClick={(() => dispatch(openCloseLocalisationModal()))}
            >
              <BiMap size={args.size} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Points d'Intérêt">
            <IconButton
              className={isInterestPointOpen ? "icon" : ''}
              onClick={(() => dispatch(openCloseInterestPointModal()))}
            >
              <BiBookmark size={args.size} />
            </IconButton>
          </Tooltip>
        </Box>
        
        </Box>
          ) : (
            <Box component="section" sx={{ margin: '2vh 1.5vh 0' }}>
            <Fab variant="extended" aria-label="add" sx={{ display: 'inline', ml: 'auto', mr: 'auto', mt : '2vh', fontWeight: 'bold', fontSize: '19px'}} onClick={(() => dispatch(openCloseCarModal()))}>
          Créez votre trajet personnalisé !
          </Fab>
          <Box component="nav" sx={{ display: 'flex', justifyContent: 'center', marginTop: '2vh' }}>
          <Tooltip title="Choix véhicule">
            <IconButton
              className={isCarOpen ? "icon" : ''}
              onClick={(() => dispatch(openCloseCarModal()))}
            >
              <BiCar size={args.size} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Adresses">
            <IconButton
              className={isLocalisationOpen ? "icon" : ''}
              onClick={(() => dispatch(openCloseLocalisationModal()))}
            >
              <BiMap size={args.size} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Points d'Intérêt">
            <IconButton
              className={isInterestPointOpen ? "icon" : ''}
              onClick={(() => dispatch(openCloseInterestPointModal()))}
            >
              <BiBookmark size={args.size} />
            </IconButton>
          </Tooltip>
        </Box>
       
        </Box>
          )
          }

      </Box>
      <ModalCarSettings
        reducerRoute={reducerRoute}
      />
      <ModalLocalisationSettings
        reducerRoute={reducerRoute}
      />
      <InterestPointModal
        reducerRoute={reducerRoute}
      />
       <ModalConnection
        reducerRoute='auth'
      />
    </>
  );
}

// == Export
export default Header;
