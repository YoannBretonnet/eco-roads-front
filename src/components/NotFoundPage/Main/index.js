// == Style
import './styles.scss';
import {
  Box,
//  useMediaQuery,
} from '@mui/material';

// == Composant
function Main() {
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down('mobile'));
  return (
    <Box component="main" id="main-HomePage" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '90vh'}}>
      <p
        className="not-found-page-title"
      >
        Adresse incorrecte !
      </p>
      <p
        className="not-found-page-content"
      >
        Redirection dans 5 secondes ...
      </p>
    </Box>
  );
}

// == Export
export default Main;
