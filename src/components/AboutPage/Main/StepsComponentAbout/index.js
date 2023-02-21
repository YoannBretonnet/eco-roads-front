/* eslint-disable max-len */
import { useSelector, useDispatch } from 'react-redux';
import DOMPurify from 'dompurify';
// == Style
import './styles.scss';

import { Paper, Box } from '@mui/material';

import team from 'src/data/team.json'

// == Composant
function StepsComponent() {
  const args = {
    squareSize: '25vh',
  };
  return (
    <Box
      component="section"
      sx={{
        margin: '2vh auto 0 auto', width: 'fit-content', height: 'fit-content', maxHeight: '50vh',
      }}
    >
      <Box
        component="article"
        sx={{
          margin: 'auto', width: 'fit-content', height: 'fit-content', display: 'flex', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap', gap: '7vw',
        }}
      >
        {
                  team.map((item, i) => (
                    <Paper
                      key={i}
                      sx={{
                        width: args.squareSize, height: args.squareSize, background: 'transparent', border: '0.4vh solid black', borderRadius: '10%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '3vh',
                      }}
                    >
                      <img
                        className="StepsAboutImage"
                        crossOrigin="anonymous"
                        src={DOMPurify.sanitize(item.image, { USE_PROFILES: { html: false } })}
                        alt={DOMPurify.sanitize(item.name, { USE_PROFILES: { html: false } })}
                        width="100px"
                      />
                      <h3 className="stepsAbout-name">{DOMPurify.sanitize(item.name, { USE_PROFILES: { html: false } })}</h3>
                      <p className="stepsAbout-content">{DOMPurify.sanitize(item.description, { USE_PROFILES: { html: false } })}</p>
                    </Paper>
                  ))
        }
      </Box>
    </Box>
  );
}

// == Export
export default StepsComponent;
