/* eslint-disable max-len */
// == Initialisation
import PropTypes from 'prop-types';
import { openCloseCarModal, changeMapSettingInputValue, openCloseLocalisationModal } from 'src/actions/mapSettings';
import { useSelector, useDispatch } from 'react-redux';
import DOMPurify from 'dompurify';


// == Style
import './styles.scss';
import {
  TextField,
  IconButton,
  FormHelperText,
} from '@mui/material';
import { BiChevronRight } from 'react-icons/bi';

// == Data
import brands from 'src/data/brands.json'
import cars from 'src/data/cars.json'

// ==Component
import ModalElement from 'src/components/ModalElement';

// == Callbacks
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
  // const { error, brands, cars } = useSelector((state) => state.mapSettings.vehiclesData);
  const { error} = useSelector((state) => state.mapSettings.vehiclesData);
  const modalElement = 'carSettingsModal';
  const inputBrandElement = 'brandsValue';
  const inputCarElement = 'carValue';
  return (
    <ModalElement
      dispatchCall={openCloseCarModal}
      modalElement={modalElement}
      reducerRoute={reducerRoute}
    >
      <h1 className="modal-title">Sélectionnez votre véhicule :</h1>
      <form
        className="modal-form-cars"
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
              {DOMPurify.sanitize(option.name, { USE_PROFILES: { html: false } })}
            </option>
          ))}
        </TextField>
        <TextField
          id="outlined-selected-modeles"
          select
          label="Modèle"
          value={carValue}
          onChange={(event) => dispatch(changeMapSettingInputValue(event.target.value, inputCarElement, modalElement))}
          SelectProps={{
            native: true,
          }}
        >
          {getFilteredCars(cars, brandsValue).map((option) => (
            <option key={option.model} value={option.model}>
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
        <IconButton sx={{ color: 'black', width: 'fit-content', margin: 'auto' }} type="submit">
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
