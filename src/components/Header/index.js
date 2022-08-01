/* eslint-disable max-len */
// == Style
import './styles.scss';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ModalCarSettings from 'src/components/ModalMapSettings/ModalCarSettings';
import ModalLocalisationSettings from 'src/components/ModalMapSettings/ModalLocalisationSettings';
import InterestPointModal from 'src/components/ModalMapSettings/InterestPointModal';

import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  openCloseCarModal,
  openCloseLocalisationModal,
  openCloseInterestPointModal,
  // getVehiclesData,
  // getCategoriesData,
} from 'src/actions/mapSettings';

import {
  BiSearch,
  BiCar,
  BiMap,
  BiBookmark,
} from 'react-icons/bi';
import styles from './IconSlider.module.scss';

// == Composant
function Header() {
  const dispatch = useDispatch();
  const { isOpen: isCarOpen } = useSelector((state) => state.mapSettings.carSettingsModal);
  const { isOpen: isLocalisationOpen } = useSelector((state) => state.mapSettings.localisationSettingsModal);
  const { isOpen: isInterestPointOpen } = useSelector((state) => state.mapSettings.interestPointModal);
  const args = {
    size: '4vh',
  };
  const reducerRoute = 'mapSettings';
  // useEffect(() => {
  //   dispatch(getVehiclesData());
  //   dispatch(getCategoriesData());
  // }, []);
  return (
    <>
      <Box
        component="header"
        sx={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '2vh',
        }}
      >
        <Fab variant="extended" aria-label="add" sx={{ margin: 'auto', gap: '1vh', fontWeight: 'bold' }} onClick={(() => dispatch(openCloseCarModal()))}>
          Véhicule | Localisation | Intérets
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
          <Tooltip title="Choix véhicule">
            <IconButton
              className={isLocalisationOpen ? styles.icon : ''}
              onClick={(() => dispatch(openCloseLocalisationModal()))}
            >
              <BiMap size={args.size} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Point d'intérets">
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
