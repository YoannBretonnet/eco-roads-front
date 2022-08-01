/* eslint-disable max-len */
// == Import
import PropTypes from 'prop-types';
import { openCloseCarModal, changeMapSettingInputValue, openCloseLocalisationModal } from 'src/actions/mapSettings';
import { useSelector, useDispatch } from 'react-redux';

// == Style
import './styles.scss';

import {
  TextField,
  IconButton,
  FormHelperText,
} from '@mui/material';

import { BiChevronRight } from 'react-icons/bi';

// ==Component
import ModalElement from 'src/components/ModalElement';

function getFilteredCars(cars, brandInput) {
  return cars.filter((option) => option.brand_id === parseInt(brandInput, 10));
}

function getFirstFilteredCars(cars, brandInput) {
  return cars.filter((option) => option.brand_id === parseInt(brandInput, 10))[0].id;
}

// == Composant
function ModalCarSettings({ reducerRoute, updatePage }) {
  const dispatch = useDispatch();
  const { brandsValue, carValue } = useSelector((state) => state.mapSettings.carSettingsModal);
  const { error, brands, cars } = useSelector((state) => state.mapSettings.vehiclesData);
  const modalElement = 'carSettingsModal';
  const inputBrandElement = 'brandsValue';
  const inputCarElement = 'carValue';
  return (
    <ModalElement
      dispatchCall={openCloseCarModal}
      modalElement={modalElement}
      reducerRoute={reducerRoute}
    >
      <h1 className="modal-title">Quel est votre véhicule&nbsp;?</h1>
      <form
        className="modal-form-connection"
        onSubmit={((event) => {
          event.preventDefault();
          dispatch(openCloseCarModal());
          dispatch(openCloseLocalisationModal());
        })}
      >
        <TextField
          id="outlined-select-brands"
          select
          label="Marque"
          value={brandsValue}
          onChange={(event) => {
            dispatch(changeMapSettingInputValue(event.target.value, inputBrandElement, modalElement));
            dispatch(changeMapSettingInputValue(getFirstFilteredCars(cars, event.target.value), inputCarElement, modalElement));
          }}
          SelectProps={{
            native: true,
          }}
        >
          {brands.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </TextField>
        <TextField
          id="outlined-select-brands"
          select
          label="Modèle"
          value={carValue}
          onChange={(event) => dispatch(changeMapSettingInputValue(event.target.value, inputCarElement, modalElement))}
          SelectProps={{
            native: true,
          }}
        >
          {getFilteredCars(cars, brandsValue).map((option) => (
            <option key={option.id} value={option.id}>
              {option.model}
            </option>
          ))}
        </TextField>
        {error.isError && (
        <FormHelperText
          error={error.isError}
        >{error.message}
        </FormHelperText>
        )}
        <IconButton sx={{ color: 'black' }} type="submit">
          <BiChevronRight size="8vh" />
        </IconButton>
      </form>
    </ModalElement>
  );
}

ModalCarSettings.defaultProps = {
  updatePage: false,
};

ModalCarSettings.propTypes = {
  reducerRoute: PropTypes.string.isRequired,
  updatePage: PropTypes.bool,
};

// == Export
export default ModalCarSettings;
