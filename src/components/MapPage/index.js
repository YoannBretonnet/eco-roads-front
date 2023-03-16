// == Style 
import 'mapbox-gl/dist/mapbox-gl.css';

// == Components
import Header from 'src/components/Header';
import Main from 'src/components/MapPage/Main';
import Footer from 'src/components/Footer';

// == Composant
function MapPage() {
  return (
    
    <>
      <Header />
      <Main />
      <div id="instructions"></div>
      <Footer />
             
     </>
  );
}

// == Export
export default MapPage;
