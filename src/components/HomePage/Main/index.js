// == Style
import './styles.scss';
import {
  Box,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

// == Components
import CarouselComponent from 'src/components/Carousel';
import StepsComponent from 'src/components/StepsComponent';

// == Composant
function Main() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('tablet'));
  return (
    <>
    <Box component="main" id="main-HomePage">
       {matches ? <CarouselComponent /> : <StepsComponent />}
    </Box>
    </>
  );
}

export default Main;
