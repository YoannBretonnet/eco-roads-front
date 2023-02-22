/* eslint-disable max-len */
// == Style
import './styles.scss';
import DOMPurify from 'dompurify';


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
      description: 'Renseignez vos information',
      icon: 'BiEditAlt',
    },
    {
      step: 'Etape 2',
      description: 'Générez votre trajet',
      icon: 'BiWrench',
    },
    {
      step: 'Etape 3',
      description: 'Laissez vous guider',
      icon: 'BiMapAlt',
    },
  ];
  const args = {
    squareSize: '45vh',
  };
  return (
    <Box component="section" sx={{ margin: '4vh auto 0 auto', width: 'fit-content', height: 'fit-content' }}>
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
        sx={{ width: args.squareSize, height: args.squareSize, margin: 'auto' }}
        NextIcon={<BiChevronRight size="8vh" />}
        PrevIcon={<BiChevronLeft size="8vh" />}
        navButtonsProps={{
          style: {
            backgroundColor: 'transparent',
            color: 'black',
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
              <p>Architect & Engineer</p> 
              <p>We love that guy</p>
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
