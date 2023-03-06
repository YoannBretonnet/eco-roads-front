// == Style
import './styles.scss';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  useMediaQuery,
} from '@mui/material';

import pic from 'src/assets/images/about.jpg';

// == Composant
function Main() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('tablet'));
  return (
    <Box component="main" id="main-AboutPage">
      <Box component="section" sx={{ margin: '4vh 18vh 0' }}>
        {matches ? (
          <>
            <p className="about-accroche">
              E-co Roads est un générateur de trajet pour véhicule électrique. Choisissez le point de départ de votre séjour et le modèle de votre véhicule.
              Ensuite laissez vous guider par notre proposition qui établira un itinéraire basé sur vos centres d’intérêts,
              que vous aurez au préalable renseignés, prenant en compte la localisation des points de recharges et les lieux à visiter.
            </p>
            <img src={pic} alt='application e-co roads' className='aboutMobile--image'/>
          </>
        ) : (
          <div className='aboutDesktop' >
            <p className="about-accroche">
              E-co Roads est un générateur de trajet pour véhicule électrique. Choisissez le point de départ de votre séjour et le modèle de votre véhicule.
              Ensuite laissez vous guider par notre proposition qui établira un itinéraire basé sur vos centres d’intérêts,
              que vous aurez au préalable renseignés, prenant en compte la localisation des points de recharges et les lieux à visiter.
            </p>
            <img src={pic} alt='application e-co roads' className='aboutDesktop--image'/>
          </div>
        )}
        <h2 className="about-title">
          Contactez-nous
        </h2>
        <p className="about-accroche">
          <a href="mailto: hello@eco-roads.com">hello@eco-roads.com</a>
        </p>
      </Box>
    </Box>
  );
}

// == Export
export default Main;
