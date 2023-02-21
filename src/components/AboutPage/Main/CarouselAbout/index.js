/* eslint-disable max-len */
import { useSelector, useDispatch } from 'react-redux';
import DOMPurify from 'dompurify';
// == Style
import './styles.scss';

import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import {
  BiChevronLeft,
  BiChevronRight,
} from 'react-icons/bi';

// == Composant
function CarouselComponent() {
  const args = {
    size: '40vh',
  };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('laptop'));
  return (
    <Box component="section" sx={{ margin: '2vh auto 0', width: 'fit-content', height: 'fit-content' }}>
      <Carousel
        navButtonsAlwaysVisible
        cycleNavigation
        fullHeightHover
        swipe
        animation="slide"
        autoPlay={false}
        indicators={false}
        sx={{ width: args.size, height: args.size, margin: 'auto' }}
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
          team.map((item, i) => (
            <Paper
              key={i}
              sx={{
                width: args.size, height: args.size, background: 'transparent', border: '0.4vh solid black', borderRadius: '10%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10% 0 0', gap: '1vh',
              }}
            >

              <img
                className={matches ? 'mainAbout-img-desktop' : 'mainAbout-img'}
                crossOrigin="anonymous"
                src={DOMPurify.sanitize(item.image, { USE_PROFILES: { html: false } })}
                alt={DOMPurify.sanitize(item.name, { USE_PROFILES: { html: false } })}
                width="100px"
              />
              <p className="carouselAbout-name">{DOMPurify.sanitize(item.name, { USE_PROFILES: { html: false } })}</p>
              <p className="carouselAbout-content">{DOMPurify.sanitize(item.description, { USE_PROFILES: { html: false } })}</p>
            </Paper>
          ))
        }
      </Carousel>
    </Box>
  );
}

// == Export
export default CarouselComponent;
