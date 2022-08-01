// == Import
import { useSelector, useDispatch } from 'react-redux';
// import {  } from 'src/store/action';

import {
  openCloseAccountUpdateModal,
} from 'src/actions/authentification';

import {
  openCloseCarModal,
} from 'src/actions/mapSettings';

// == Style
import {
  Box, Tooltip, IconButton, Chip, Button,
} from '@mui/material';
import './styles.scss';

import {
  BiEdit,
} from 'react-icons/bi';

// const getGoodBrand = (brands, brandId) => brands.filter((option) => option.id === brandId)[0].name;

// == Composant
function Main() {
  const dispatch = useDispatch();
  const {
    userName,
    car,
    location,
    categories,
  } = useSelector((state) => state.auth.initialUserAccount);

  return (
    <Box
      id="main-ProfilePage"
      component="main"
      sx={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '26vh',
      }}
    >
      <Box
        component="header"
        sx={{
          display: 'flex', flexDirection: 'row', margin: 'auto', alignItems: 'center',
        }}
      >
        <h2 className="main-message">
          {`Bienvenue ${userName}`}
        </h2>
        <Tooltip title="Paramètre de sécurité">
          <IconButton
            sx={{ position: 'relative', bottom: '-1vh' }}
            onClick={() => dispatch(openCloseAccountUpdateModal())}
          >
            <BiEdit size="3vh" />
          </IconButton>
        </Tooltip>
      </Box>
      <article className="user-preferences-container">
        <article className="user-preferences-container-vehiclesData user-preferences-container-element">
          <p>
            Type de véhicule:
          </p>
          <Chip label={car.name} />
          <Chip label={car.model} />
        </article>
        <article className="user-preferences-container-departureData user-preferences-container-element">
          <p>
            Point de départ:
          </p>
          <Chip label={`${location.street_number} ${location.address}, ${location.city}`} />
        </article>
        <article className="user-preferences-container-departureData user-preferences-container-element">
          <p>
            Centres d'intérêts:
          </p>
          {
            categories.map((categorie) => <Chip key={categorie.id} label={categorie.category} />)
          }
        </article>
        <Tooltip title="Paramètre de préférence">
          <Button
            variant="contained"
            sx={{
              '&.MuiButton-root': {
                width: 'fit-content', margin: 'auto', backgroundColor: '#6cc573',
              },
            }}
            onClick={() => dispatch(openCloseCarModal())}
          >
            Modifier mes informations de trajet
          </Button>
        </Tooltip>
      </article>
    </Box>
  );
}

// == Export
export default Main;
