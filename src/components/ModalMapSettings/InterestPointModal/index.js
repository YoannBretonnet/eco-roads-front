/* eslint-disable max-len */
// == Import
import PropTypes from 'prop-types';
import { openCloseInterestPointModal, selectInterestPoint, openCloseLocalisationModal } from 'src/actions/mapSettings';
import { updateUserTravelParam } from 'src/actions/authentification';
import { getRoute, getRouteSuccess } from 'src/actions/mapData';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import list from 'src/data/categories.json'

import data from 'src/data/coords.json';

// == Style
import './styles.scss';

import {
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
  FormControlLabel,
  Checkbox,
  IconButton,
  Box,
  CircularProgress,
} from '@mui/material';

import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

// ==Component
import ModalElement from 'src/components/ModalElement';

// == Composant
function InterestPointModal({ reducerRoute, updatePage }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selected = useSelector((state) => state.mapSettings.interestPointModal.selected);
  const { error } = useSelector((state) => state.mapSettings.categoriesData);
  // const { error, list } = useSelector((state) => state.mapSettings.categoriesData);
  const isLocalisation = useSelector((state) => Boolean(state.mapSettings.localisationSettingsModal.DepartSelected.Lat && state.mapSettings.localisationSettingsModal.ArrivSelected.Lat));
  const { isLoading, error: statusError } = useSelector((state) => state.mapData.status);
  const isErrorMax = selected.length > 3;
  const isErrorMin = selected.length < 1;
  const modalElement = 'interestPointModal';
  return (
    <ModalElement
      dispatchCall={openCloseInterestPointModal}
      modalElement={modalElement}
      reducerRoute={reducerRoute}
    >
      <h1 className="modal-title">Point d'intérêts</h1>
      <form
        className="modal-form-connection"
        onSubmit={((event) => {
          event.preventDefault();
          if (!isErrorMax && !isErrorMin) {
            if (updatePage) {
              dispatch(updateUserTravelParam());
            }
            if (!updatePage && isLocalisation) {
              dispatch(getRouteSuccess(data, navigate));
            }
          }
        })}
      >
        <FormControl
          required
          error={isErrorMax || isErrorMin}
          component="fieldset"
          variant="standard"
        >
          <FormLabel component="legend">3 Max et 1 Min</FormLabel>
          <FormGroup>
            {list.map((option) => (
              <FormControlLabel
                key={option.name}
                sx={{ color: 'black' }}
                control={(
                  <Checkbox
                    checked={Boolean(selected.find((select) => select.name === option.name))}
                    onChange={(event) => dispatch(selectInterestPoint(event.target.checked, option))}
                    name={option.name}
                    sx={{
                      '&.Mui-checked': {
                        color: '#6cc573',
                      },
                    }}
                  />
              )}
                label={DOMPurify.sanitize(option.name, { USE_PROFILES: { html: false } })}
              />
            ))}
          </FormGroup>
          {isErrorMax && (
            <FormHelperText>Veuillez retirer des points d'intérêts</FormHelperText>
          )}
          {isErrorMin && (
            <FormHelperText>Veuillez ajouter des points d'intérêts</FormHelperText>
          )}
        </FormControl>
        {error.isError && (
        <FormHelperText
          error={error.isError}
        >{DOMPurify.sanitize(error.message, { USE_PROFILES: { html: false } })}
        </FormHelperText>
        )}
        {(!isLocalisation && !updatePage) && (
        <FormHelperText error>
          Veuillez sélectionner le départ / arrivée
        </FormHelperText>
        )}
        {statusError.isError && (
        <FormHelperText
          error={statusError.isError}
        >{DOMPurify.sanitize(statusError.message, { USE_PROFILES: { html: false } })}
        </FormHelperText>
        )}
        <Box
          component="nav"
          sx={{
            display: 'flex', justifyContent: 'center',
          }}
        >
          {
          !isLoading ? (
            <>
              <IconButton
                sx={{ color: 'black' }}
                type="button"
                onClick={() => {
                  dispatch(openCloseInterestPointModal());
                  dispatch(openCloseLocalisationModal());
                }}
              >
                <BiChevronLeft size="8vh" />
              </IconButton>
              <IconButton sx={{ color: 'black' }} type="submit">
                <BiChevronRight size="8vh" />
              </IconButton>
            </>
          ) : (
            <CircularProgress sx={{ color: '#6cc573', alignSelf: 'center' }} size="6vh" />
          )
        }
        </Box>
      </form>
    </ModalElement>
  );
}

InterestPointModal.defaultProps = {
  updatePage: false,
};

InterestPointModal.propTypes = {
  reducerRoute: PropTypes.string.isRequired,
  updatePage: PropTypes.bool,
};

// == Export
export default InterestPointModal;
