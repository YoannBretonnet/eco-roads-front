/* eslint-disable max-len */
// == Initialisation
import DOMPurify from 'dompurify';

// == Style
import './styles.scss';
import { Box } from '@mui/material';
import Icon from './Icon';

// == Composant
function StepsComponent() {
  const items = [
    {
      step: 'Etape 1',
      description: 'Renseignez vos informations',
      icon: 'BiEditAlt',
      content: 'Sélectionnez votre véhicule afin que nous indiquions les bornes électriques adaptées'
    },
    {
      step: 'Etape 2',
      description: 'Générez votre trajet',
      icon: 'BiWrench',
      content: `Renseignez vos points de départ et d'arrivée, ainsi que les points d'intérêt où vous aimeriez vous arrêter`
    },
    {
      step: 'Etape 3',
      description: 'Laissez vous guider',
      icon: 'BiMapAlt',
      content: `E-co road vous propose des points d'intérêt recommandés et les bornes électriques sur le chemin. Bon voyage!`
    },
  ];

  return (
    <Box component="section" sx={{ margin: '16vh auto 0 auto', width: 'fit-content', height: 'fit-content' }}>
      <h2 className='carousel-title'>
      Partez à la découverte de votre région au volant de votre voiture électrique
      </h2>
      <Box component="article" sx={{ margin: 'auto', width: 'fit-content', height: 'fit-content', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '7vw'}}>
        {
          items.map((item, i) => (
            <div className="flip-card" key={i}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
              <Icon iconSelector={item.icon} />
                  <h3 className="steps-step">{DOMPurify.sanitize(item.step, { USE_PROFILES: { html: false } })}</h3>
                  <p className="steps-content">{DOMPurify.sanitize(item.description, { USE_PROFILES: { html: false } })}</p>
              </div>
              <div className="flip-card-back">
              <>
              <p>{DOMPurify.sanitize(item.content, { USE_PROFILES: { html: false } })}</p> 
              </>
          </div>
        </div>
      </div>
          ))
        }
      </Box>
    </Box>
  );

}

// == Export
export default StepsComponent;
