/* eslint-disable max-len */
/* eslint-disable react/jsx-closing-tag-location */
// == Import
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

// == Style
import './styles.scss';

import {
  TextField,
  IconButton,
  FormHelperText,
  CircularProgress,
} from '@mui/material';

import { BiChevronRight, BiCheck } from 'react-icons/bi';

import {
  openCloseConnectionModal, changeInputValue, submitLogin,
} from 'src/actions/authentification';
import { useSelector, useDispatch } from 'react-redux';

// ==Component
import ModalElement from 'src/components/ModalElement';

// == Composant
function ModalConnection({ reducerRoute }) {
  const dispatch = useDispatch();
  const modalElement = 'connectionModal';
  const {
    emailValue,
    passwordValue,
    isLoading,
    error,
  } = useSelector((state) => state.auth[modalElement]);
  return (
    <ModalElement
      dispatchCall={openCloseConnectionModal}
      modalElement={modalElement}
      reducerRoute={reducerRoute}
    >
      <h1 className="modal-title">Se connecter</h1>
      <form
        className="modal-form-connection"
        onSubmit={((event) => {
          event.preventDefault();
          dispatch(submitLogin());
        })}
      >
        <TextField
          type="email"
          id="email-input"
          label="Email"
          variant="outlined"
          required
          sx={{ width: '100%' }}
          value={emailValue}
          onChange={(event) => dispatch(changeInputValue(event.target.value, emailValue, modalElement))}
        />
          <TextField
          type="password"
          id="password-input"
          label="Password"
          variant="outlined"
          required
          sx={{ width: '100%' }}
          value={passwordValue}
          onChange={(event) => dispatch(changeInputValue(event.target.value, passwordValue, modalElement))}
        />
        {error.isError && (
        <FormHelperText
          error={error.isError}
        >{DOMPurify.sanitize(error.message, { USE_PROFILES: { html: false } })}</FormHelperText>
        )}
        {
          !isLoading ? (
            <IconButton sx={{ color: 'black', width: 'fit-content', margin: 'auto' }} type="submit">
              <BiChevronRight size="8vh" />
            </IconButton>
          ) : (
            <CircularProgress sx={{ color: '#6cc573', alignSelf: 'center' }} size="6vh" />
          )
        }
      </form>

    </ModalElement>
  );
}

ModalConnection.defaultProps = {
    updatePage: false,
  };
  

ModalConnection.propTypes = {
  reducerRoute: PropTypes.string.isRequired,
  updatePage: PropTypes.bool,
};

// == Export
export default ModalConnection;