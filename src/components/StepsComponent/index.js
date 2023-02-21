/* eslint-disable max-len */
// == Style
import DOMPurify from 'dompurify';
import './styles.scss';

import { Paper, Box } from '@mui/material';

import Icon from './Icon';

// == Composant
function StepsComponent() {
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
      description: 'Laissez vous porter',
      icon: 'BiMapAlt',
    },
  ];
  const args = {
    squareSize: '25vh',
  };
  return (
    <Box component="section" sx={{ margin: '2vh auto 0 auto', width: 'fit-content', height: 'fit-content' }}>
      <h2 className="steps-title">
        Comment ça marche ?
      </h2>
      <Box component="article" sx={{ margin: 'auto', width: 'fit-content', height: 'fit-content', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '7vw'}}>
        {
          items.map((item, i) => (
            <Paper
              key={i}
              sx={{
                width: args.squareSize, height: args.squareSize, background: 'transparent', border: '0.4vh solid black', borderRadius: '10%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '3.5vh',
              }}
            >
              <Icon iconSelector={item.icon} />
              <h3 className="steps-step">{DOMPurify.sanitize(item.step, { USE_PROFILES: { html: false } })}</h3>
              <p className="steps-content">{DOMPurify.sanitize(item.description, { USE_PROFILES: { html: false } })}</p>
            </Paper>
          ))
        }
      </Box>
    </Box>
  );
}

// == Export
export default StepsComponent;
