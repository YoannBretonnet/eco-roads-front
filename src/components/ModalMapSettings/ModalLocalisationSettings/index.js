/* eslint-disable max-len */
// == Import
import PropTypes from 'prop-types';
import {
  openCloseLocalisationModal,
  changeMapSettingAutocompleteValue,
  updateListOfLocalisation,
  openCloseInterestPointModal,
  openCloseCarModal,
} from 'src/actions/mapSettings';
import { useSelector, useDispatch } from 'react-redux';

// == Style
import './styles.scss';

import {
  TextField,
  IconButton,
  Autocomplete,
  CircularProgress,
  Box,
} from '@mui/material';

import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

// ==Component
import ModalElement from 'src/components/ModalElement';

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
      <h1 className="modal-title">Définissez votre trajet</h1>
      <form
        className="modal-form-localisation"
        onSubmit={((event) => {
          event.preventDefault();
          dispatch(openCloseLocalisationModal());
          dispatch(openCloseInterestPointModal());
        })}
      >
        <Autocomplete
          inputValue={DepartSelected.label}
          onChange={(_event, value) => dispatch(changeMapSettingAutocompleteValue(value, depart.inputElement, modalElement))}
          noOptionsText="Aucune proposition"
          disablePortal
          disableClearable
          id="modal-form-departure"
          options={DepartProposition}
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
          options={ArrivProposition}
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
