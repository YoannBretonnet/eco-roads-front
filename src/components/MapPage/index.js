// == Style
import './styles.scss';

// == Component
import Header from 'src/components/Header';
import Map from './Map';
import ModalConnection from 'src/components/ModalAuthentification/ModalConnection';
import ModalAccountCreation from 'src/components/ModalAuthentification/ModalAccountCreation';

import 'mapbox-gl/dist/mapbox-gl.css';


// == Composant
function MapPage() {
  const reducerRoute = 'auth';

  return (
    <>
      <Header />
      <Map />
      <ModalConnection
        reducerRoute={reducerRoute}
      />
      <ModalAccountCreation
        reducerRoute={reducerRoute}
      />
    </>
  );
}

// == Export
export default MapPage;
