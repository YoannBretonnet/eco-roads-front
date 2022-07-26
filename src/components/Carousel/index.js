/* eslint-disable max-len */
// == Style
import './styles.scss';

import Icon from './Icon';

import Carousel from 'react-material-ui-carousel';
import { Paper, Box } from '@mui/material';

import {
  BiChevronLeft,
  BiChevronRight,
  BiEditAlt,
} from 'react-icons/bi';

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
      icon: 'BiBot',
    },
    {
      step: 'Etape 3',
      description: 'Laissez vous porter',
      icon: 'BiMapAlt',
    },
  ];
  const args = {
    squareSize: '25vh',
  };
  return (
    <Box component="section" sx={{ margin: '2vh auto 0 auto', width: 'fit-content', height: 'fit-content' }}>
      <h2 className='carousel-title'>
        Comment ça marche ?
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
            margin: '0',
            padding: '0',
          },
        }}
      >
        {
          items.map((item, i) => (
            <Paper
              key={i}
              sx={{
                width: args.squareSize, height: args.squareSize, background: 'transparent', border: '0.4vh solid black', borderRadius: '10%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10% 0 0',
              }}
            >
              <Icon iconSelector={item.icon} />
              <h3 className="carousel-step">{item.step}</h3>
              <p className="carousel-content">{item.description}</p>
            </Paper>
          ))
        }
      </Carousel>
    </Box>
  );
}

// == Export
export default CarouselComponent;
