/* eslint-disable max-len */
// == Initialisation
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// == Style
import './styles.scss';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {
  BiUser,
  BiCar,
  BiMap,
  BiBookmark,
} from 'react-icons/bi';

// == Components
import ModalCarSettings from 'src/components/ModalMapSettings/ModalCarSettings';
import ModalLocalisationSettings from 'src/components/ModalMapSettings/ModalLocalisationSettings';
import InterestPointModal from 'src/components/ModalMapSettings/InterestPointModal';
import ModalConnection from '/src/components/ModalConnexion';
import FloatingMenu from './FloatingMenu'

// == Actions
import {
  openCloseCarModal,
  openCloseLocalisationModal,
  openCloseInterestPointModal,
} from 'src/actions/mapSettings';
import {
  openCloseConnectionModal,
  submitDeconnexion,
} from 'src/actions/authentification';

// == Composant
function Header() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('tablet'));
  const dispatch = useDispatch();
  const { isOpen: isCarOpen } = useSelector((state) => state.mapSettings.carSettingsModal);
  const { isOpen: isLocalisationOpen } = useSelector((state) => state.mapSettings.localisationSettingsModal);
  const { isOpen: isInterestPointOpen } = useSelector((state) => state.mapSettings.interestPointModal);
  const { isConnected: isConnected } = useSelector((state) => state.auth.connectionModal);
  const handleDeconnexion = () => {
    dispatch(submitDeconnexion())
  };
  const handleClick = (event) => {
    dispatch(openCloseConnectionModal());
  };
  const args = {
    size: '2rem',
  };
  const reducerRoute = 'mapSettings';
  return (
    <>
      <Box
        component="header"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '0.5vh',
        }}
      >
      <Box component="section" sx={{ 
        margin: '2vh 1.5vh 0', 
        position: 'fixed', 
        left: '0', 
        bottom: 'unset', 
        top: '0', 
        width: 'fit-content', 
        }}
      >
        <NavLink
          key="homePage"
          className="main-title"
          to="/"
        >
          E-co Roads
        </NavLink>
      </Box>
      {matches ? (
        // for Mobile
        <Box component="section" sx={{
          position: 'fixed',
          right: '0',
          bottom: 'unset',
          top: '0',
          width: 'fit-content',
          }}
        >
        {
          <>
            {!isConnected ? (
              <Tooltip title="Connexion">
                <IconButton
                  onClick={handleClick}
                  aria-haspopup="true"
                  >
                  <BiUser size={`6vh`} />
                  </IconButton>
              </Tooltip>
                ) : (
                  <FloatingMenu />
                )}
            </>
          }
        </Box>
        ) : (
        // for Desktop
        <Box component="section" sx={{
          position: 'fixed',
          right: '0',
          bottom: 'unset',
          top: '0',
          width: 'fit-content',
          }}
          >
          {
            <>
              {!isConnected ? (
                <nav
                  className='connexion'
                  onClick={handleClick}>
                  <span>Connexion</span>
                </nav>
              ) : (
                <nav className='connexion connexion--menu'>
                  <NavLink
                    key="profilePage"
                    to="/profile"
                  >
                  Profile
                  </NavLink>
                    <span onClick={handleDeconnexion}
                    >Déconnexion</span>
                </nav>
                )}
              </>
            }
        </Box>
        )}
        {matches ? (
        // for Mobile
        <Box component="section" sx={{ margin: '8vh 1.5vh 0' }}>
          <Fab variant="extended" aria-label="add" sx={{ display: 'inline', ml: 'auto', mr: 'auto', mt: '2vh', gap: '1vh', fontWeight: 'bold', zindex: '3' }} onClick={(() => dispatch(openCloseCarModal()))}>
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
          // for Desktop
          <Box component="section" sx={{ margin: '2vh 1.5vh 0' }}>
            <Fab variant="extended" aria-label="add" sx={{ 
              display: 'inline', 
              ml: 'auto', 
              mr: 'auto', 
              mt: '2vh', 
              fontWeight: 'bold', 
              fontSize: '1rem' 
              }} 
              onClick={(() => dispatch(openCloseCarModal()))}>
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
          )}
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
