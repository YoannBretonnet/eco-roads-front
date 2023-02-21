// == Style
import './styles.scss';


// == Component
import Header from 'src/components/Header';
import Main from 'src/components/MapPage/Main';
import Footer from 'src/components/Footer';

import 'mapbox-gl/dist/mapbox-gl.css';



// == Composant

function MapPage() {
  const reducerRoute = 'auth';

  return (
    <>
      <Header />
      <Main />
      <Footer />
     </>
  );
}

// == Export
export default MapPage;
