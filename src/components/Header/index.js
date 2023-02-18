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

import { useSelector, useDispatch } from 'react-redux';
import {
  openCloseCarModal,
  openCloseLocalisationModal,
  openCloseInterestPointModal,
} from 'src/actions/mapSettings';

import {
  BiSearch,
  BiCar,
  BiMap,
  BiBookmark,
} from 'react-icons/bi';
import styles from './styles.scss';

// == Composant
function Header() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('tablet'));
  const dispatch = useDispatch();
  const { isOpen: isCarOpen } = useSelector((state) => state.mapSettings.carSettingsModal);
  const { isOpen: isLocalisationOpen } = useSelector((state) => state.mapSettings.localisationSettingsModal);
  const { isOpen: isInterestPointOpen } = useSelector((state) => state.mapSettings.interestPointModal);
  const args = {
    size: '4vh',
  };
  const reducerRoute = 'mapSettings';
  return (
    <>
      <Box
        component="header"
        sx={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '2vh',
        }}
      >
        <Box component="section" sx={{ margin: '2vh 1.5vh 0' }}>
            <h1 className="main-title">
              E-co Roads
            </h1>
            <p className="main-accroche">
              Découvrez votre région en toute sérénité au volant de votre voiture électrique
            </p>
          </Box>
      
        {/* {!matches && (
        <Tooltip
          title="Page d'accueil"
          sx={{ position: 'absolute', top: '0', left: '0' }}
        >
          <NavLink
            key="homePage"
            className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
            to="/"
          >
            <h1 className="main-title profile-page-header-title">
              E-co Roads
            </h1>
          </NavLink>
        </Tooltip>
        )} */}
        <Fab variant="extended" aria-label="add" sx={{ margin: 'auto', gap: '1vh', fontWeight: 'bold' }} onClick={(() => dispatch(openCloseCarModal()))}>
          Créez votre trajet personnalisé!
          <BiSearch size="3.1vh" />
        </Fab>
        <Box component="nav" sx={{ display: 'flex', justifyContent: 'center', marginTop: '1vh' }}>
          <Tooltip title="Choix véhicule">
            <IconButton
              className={isCarOpen ? styles.icon : ''}
              onClick={(() => dispatch(openCloseCarModal()))}
            >
              <BiCar size={args.size} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Adresse">
            <IconButton
              className={isLocalisationOpen ? styles.icon : ''}
              onClick={(() => dispatch(openCloseLocalisationModal()))}
            >
              <BiMap size={args.size} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Point d'Intérêts">
            <IconButton
              className={isInterestPointOpen ? styles.icon : ''}
              onClick={(() => dispatch(openCloseInterestPointModal()))}
            >
              <BiBookmark size={args.size} />
            </IconButton>
          </Tooltip>
        </Box>
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
    </>
  );
}

// == Export
export default Header;
