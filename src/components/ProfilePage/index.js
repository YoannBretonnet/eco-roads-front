// == Import

import { Box } from '@mui/material';

import ModalAccountUpdate from 'src/components/ModalAuthentification/ModalAccountUpdate';
import ModalCarSettings from 'src/components/ModalMapSettings/ModalCarSettings';
import ModalLocalisationSettings from 'src/components/ModalMapSettings/ModalLocalisationSettings';
import InterestPointModal from 'src/components/ModalMapSettings/InterestPointModal';
import Header from './Header';
import Main from './Main';

// == Style
import './styles.scss';

// == Composant
function ProfilePage() {
  const reducerAuth = 'auth';
  const reducerMap = 'mapSettings';
  const updatePage = true;

  return (
    <Box
      component="div"
      id="App-ProfilePage"
      sx={{
        height: 'fit-content', width: 'fit-content', margin: '0', padding: '0', display: 'flex', flexDirection: 'column', minHeight: '100vh',
      }}
    >
      <Header />
      <Main />
      <ModalAccountUpdate
        reducerRoute={reducerAuth}
      />
      <ModalCarSettings
        updatePage={updatePage}
        reducerRoute={reducerMap}
      />
      <ModalLocalisationSettings
        updatePage={updatePage}
        reducerRoute={reducerMap}
      />
      <InterestPointModal
        updatePage={updatePage}
        reducerRoute={reducerMap}
      />
    </Box>
  );
}

// == Export
export default ProfilePage;
