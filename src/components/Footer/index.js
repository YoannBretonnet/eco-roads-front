// == Import
import { NavLink } from 'react-router-dom';
import { saveAs } from 'file-saver';

import { Box, Tooltip, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// == Style
import './styles.scss';

// == Composant
function Footer() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('tablet'));
  const saveCGU = () => {
    saveAs(
      'https://eco-roads.herokuapp.com/pdf/CGU_E-CO_ROADS.pdf',
      'CGU.pdf',
    );
  };

  return (
    <Box
      component="footer"
      sx={{
        display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '4.5vh', width: '80vw', position: 'fixed', bottom: '0', maxHeight: '7vh',
      }}
    >
      {matches ? (
        <div id="footer-decorations">
          <div id="footer-decorations-first-element" />
          <div id="footer-decorations-second-element" />
          <div id="footer-decorations-third-element" />
        </div>
      ) : (
        <div id="footer-decorations">
          <div id="footer-decorations-desktop-first-element" />
          <div id="footer-decorations-desktop-second-element" />
          <div id="footer-decorations-desktop-third-element" />
        </div>
      )}
      <nav className="menu-footer">
        <Tooltip title="Page d'accueil">
          <NavLink
            key="homePage"
            style={({ isActive }) => ({ display: isActive ? 'none' : 'flex', gap: '1vw' })}
            to="/"
          >
            Page d'accueil
            <p className="menu-separator">-</p>
          </NavLink>
        </Tooltip>
        <Tooltip title="À propos">
          <NavLink
            key="about"
            style={({ isActive }) => ({ display: isActive ? 'none' : 'flex', gap: '1vw' })}
            to="/about"
          >
            À propos
            <p className="menu-separator">-</p>
          </NavLink>
        </Tooltip>
        <Tooltip title="CGU">
          <NavLink
            key="cgu"
            className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
            to="/"
            onClick={saveCGU}
          >
            CGU
          </NavLink>
        </Tooltip>
      </nav>
    </Box>
  );
}

// == Export
export default Footer;
