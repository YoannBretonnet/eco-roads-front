// == Style
import {
  Box,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

// == Components
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Main from 'src/components/AboutPage/Main';

// == Composant
function AboutPage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('tablet'));
  return (
    <Box
      component="div"
      id={matches ? 'App-AboutPage' : 'App-AboutPage-Desktop'}
      sx={{
        height: 'fit-content', 
        width: '100%', 
        margin: '0', 
        padding: '0', 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
      }}
    >
      <Header />
      <Main />
      <Footer />
    </Box>
  );
}

// == Export
export default AboutPage;
