import { createTheme } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 425,
      tablet: 768,
      laptop: 1024,
      desktop: 1200,
    },
  },
  palette: {
    primary: {
      main: '#72be66',
    },
    secondary: {
      main: '#757575',
    },
    light: {
      green: '#72be66',
      grey: '#e0e0e0',
      blue: '#4eb6e7',
    },
    dark: {
      green: '#72be66',
      grey: '#757575',
    },
  },
});

export default theme;
