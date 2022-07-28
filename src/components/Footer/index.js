// == Import
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import {  } from 'src/store/action';

import { Box, Tooltip } from '@mui/material';

// == Style
import './styles.scss';

// == Composant
function Footer() {
  const dispatch = useDispatch();
  // const  = useSelector((state) => state.);

  return (
    <Box
      component="footer"
      sx={{
        display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '4.5vh', width: '80vw', position: 'relative', flexGrow: '1',
      }}
    >
      <div id="footer-decorations">
        <div id="footer-decorations-first-element" />
        <div id="footer-decorations-second-element" />
        <div id="footer-decorations-third-element" />
      </div>
      <nav className="menu-footer">
        <Tooltip title="À propos">
          <NavLink
            key="about"
            className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
            to="/about"
          >
            À propos
          </NavLink>
        </Tooltip>
        <p className="menu-separator">-</p>
        <Tooltip title="CGU">
          <NavLink
            key="cgu"
            className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
            to="/cgu"
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
