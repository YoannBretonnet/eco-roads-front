// == Import
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

// == Style
import { Box, Tooltip } from '@mui/material';
import './styles.scss';

// == Composant
function Header() {
  const dispatch = useDispatch();

  return (
    <Box
      component="header"
      sx={{ marginTop: '1.5vh', display: 'flex' }}
    >
      <Tooltip title="Page d'acceuil">
        <NavLink
          key="homePage"
          className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
          to="/"
        >
          <h1 className="main-title profile-page-header-title">
            E-co Roads
          </h1>
        </NavLink>
      </Tooltip>
    </Box>
  );
}

// == Export
export default Header;
