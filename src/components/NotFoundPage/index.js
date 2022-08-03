import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// == Style
import './styles.scss';

// == Component
import Header from 'src/components/ProfilePage/Header';
import Footer from 'src/components/Footer';
import Main from 'src/components/NotFoundPage/Main';

import {
  Box,
//  useMediaQuery,
} from '@mui/material';
// import { useTheme } from '@mui/material/styles';

// == Composant
function NotFoundPage() {
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down('mobile'));
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, '5000');
  }, []);
  return (
    <Box
      component="div"
      id="App-NotFoundPage"
      sx={{
        height: 'fit-content', width: '100%', margin: '0', padding: '0', display: 'flex', flexDirection: 'column', minHeight: '100vh',
      }}
    >
      <Header />
      <Main />
      <Footer />
    </Box>
  );
}

// == Export
export default NotFoundPage;
