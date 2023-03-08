/* eslint-disable max-len */
// == Initialisation
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

// == Style
import './styles.scss';
import {
  TextField,
  IconButton,
  Autocomplete,
  CircularProgress,
  Box,
  FormHelperText,
} from '@mui/material';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

// == Actions
import {
  openCloseLocalisationModal,
  changeMapSettingAutocompleteValue,
  updateListOfLocalisation,
  openCloseInterestPointModal,
  openCloseCarModal,
} from 'src/actions/mapSettings';

// ==Component
import ModalElement from 'src/components/ModalElement';

// == Callbacks
function getGoodOptions(arrayProposition) {
  if (!arrayProposition[0]) {
    return [];
  }
  return arrayProposition.map((option) => {
    const arrayTested = arrayProposition.filter((arrayTest) => arrayTest.properties.label === option.properties.label);
    if (arrayTested.length > 1) {
      return {
        ...option,
        properties: {
          ...option.properties,
          label: `${option.properties.label} ${option.properties.postcode}`,
        },
      };
    }
    return option;
  });
}

// == Composant
function ModalLocalisationSettings({ reducerRoute, updatePage }) {
  const dispatch = useDispatch();
  const {
    DepartProposition,
    isDepartLoading,
    DepartSelected,
    ArrivProposition,
    isArrivLoading,
    ArrivSelected,
  } = useSelector((state) => state.mapSettings.localisationSettingsModal);
  const modalElement = 'localisationSettingsModal';
  const depart = {
    proposition: 'DepartProposition',
    inputElement: 'DepartSelected',
    loading: 'isDepartLoading',
  };
  const arriv = {
    proposition: 'ArrivProposition',
    inputElement: 'ArrivSelected',
    loading: 'isArrivLoading',
  };
  return (
    <ModalElement
      dispatchCall={openCloseLocalisationModal}
      modalElement={modalElement}
      reducerRoute={reducerRoute}
    >
      <h1 className="modal-title">Définissez votre trajet :</h1>
      <form
        className="modal-form-localisation"
        onSubmit={((event) => {
          event.preventDefault();
          if (updatePage && DepartSelected.Lat && DepartSelected.Long) {
            dispatch(openCloseLocalisationModal());
            dispatch(openCloseInterestPointModal());
          }
          else if (!updatePage) {
            dispatch(openCloseLocalisationModal());
            dispatch(openCloseInterestPointModal());
          }
        })}
      >
        <Autocomplete
          inputValue={DepartSelected.label}
          onChange={(_event, value) => 
          dispatch(changeMapSettingAutocompleteValue(value, depart.inputElement, modalElement))}
          noOptionsText="Aucune proposition"
          disablePortal
          disableClearable
          id="modal-form-departure"
          options={getGoodOptions(DepartProposition)}
          isOptionEqualToValue={(option, value) => option.properties.id === value.properties.id}
          loading={isDepartLoading}
          getOptionLabel={(option) => option.properties.label}
          sx={{ width: '100%' }}
          renderInput={(params) => (
            <TextField
              onChange={(event) => dispatch(updateListOfLocalisation(event.target.value, depart.inputElement, depart.loading, depart.proposition))}
              {...params}
              label="Point de départ"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {isDepartLoading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
        />
        {
          !updatePage && (
          <Autocomplete
            inputValue={ArrivSelected.label}
            onChange={(_event, value) => dispatch(changeMapSettingAutocompleteValue(value, arriv.inputElement, modalElement))}
            noOptionsText="Aucune proposition"
            disablePortal
            disableClearable
            id="modal-form-departure"
            options={getGoodOptions(ArrivProposition)}
            isOptionEqualToValue={(option, value) => option.properties.id === value.properties.id}
            loading={isArrivLoading}
            getOptionLabel={(option) => option.properties.label}
            sx={{ width: '100%' }}
            renderInput={(params) => (
              <TextField
                onChange={(event) => dispatch(updateListOfLocalisation(event.target.value, arriv.inputElement, arriv.loading, arriv.proposition))}
                {...params}
                label="Point de d'arrivée"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {isArrivLoading ? <CircularProgress color="inherit" size={20} /> : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                }}
              />
            )}
          />
          )
        }
        {(updatePage && !DepartSelected.Lat && !DepartSelected.Long) && (
        <FormHelperText
          error
        >Veuillez selectionner une adresse !
        </FormHelperText>
        )}
        <Box
          component="nav"
          sx={{
            display: 'flex', justifyContent: 'center',
          }}
        >
          <IconButton
            sx={{ color: 'black' }}
            type="button"
            onClick={() => {
              dispatch(openCloseLocalisationModal());
              dispatch(openCloseCarModal());
            }}
          >
            <BiChevronLeft size="8vh" />
          </IconButton>
          <IconButton sx={{ color: 'black' }} type="submit">
            <BiChevronRight size="8vh" />
          </IconButton>
        </Box>
      </form>
      <Box
          sx={{
            color: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 'auto', padding: '0 2vh', fontSize: '0.9rem',
          }}
        >
      <p> Pour la démo, utilisez ces adresses :</p>
      <p>Départ: 11 Rue Gambetta 44000 Nantes</p>
      <p>Arrivée: 1 Rue Viguier 35400 Saint-Malo</p>
    </Box>
    </ModalElement>
  );
}

ModalLocalisationSettings.defaultProps = {
  updatePage: false,
};

ModalLocalisationSettings.propTypes = {
  reducerRoute: PropTypes.string.isRequired,
  updatePage: PropTypes.bool,
};

// == Export
export default ModalLocalisationSettings;
