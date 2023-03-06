/* eslint-disable max-len */
// == Initialisation
import DOMPurify from 'dompurify';

// == Style
import './styles.scss';
import Carousel from 'react-material-ui-carousel';
import { Box } from '@mui/material';
import {
  BiChevronLeft,
  BiChevronRight,
} from 'react-icons/bi';
import Icon from './Icon';

// == Composant
function CarouselComponent() {
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
    <Box component="section" sx={{ margin: '4vh auto 0 auto', width: 'fit-content', height: '45vh' }}>
      <h2 className='carousel-title'>
        Partez à la découverte de votre région
        <br />
        au volant de votre voiture électrique
      </h2>
      <Carousel
        navButtonsAlwaysVisible
        cycleNavigation
        fullHeightHover
        swipe
        animation="slide"
        autoPlay={false}
        indicators={false}
        sx={{ width: '45vh', height: '27vh', margin: 'auto', marginTop: '3.5vh' }}
        NextIcon={<BiChevronRight size="8vh" />}
        PrevIcon={<BiChevronLeft size="8vh" />}
        navButtonsProps={{
          style: {
            backgroundColor: 'transparent',
            color: '#757575',
            height: 'fit-content',
            margin: '-10px',
            padding: '0',
          },
        }}
      >
        {
          items.map((item, i) => (
            <div className="flip-card-carousel" key={i}>
              <div className="flip-card-inner-carousel">
                <div className="flip-card-front-carousel">
                  <Icon iconSelector={item.icon} />
                  <h3 className="steps-step">{DOMPurify.sanitize(item.step, { USE_PROFILES: { html: false } })}</h3>
                  <p className="steps-content">{DOMPurify.sanitize(item.description, { USE_PROFILES: { html: false } })}</p>
                </div>
                <div className="flip-card-back-carousel">
                  <>
                    <p>{DOMPurify.sanitize(item.content, { USE_PROFILES: { html: false } })}</p>
                  </>
                </div>
              </div>
            </div>
          ))
        }
      </Carousel>
    </Box>
  );
}

// == Export
export default CarouselComponent;
