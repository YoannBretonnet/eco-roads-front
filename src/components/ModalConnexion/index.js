/* eslint-disable max-len */
/* eslint-disable react/jsx-closing-tag-location */
// == Initialisation
import PropTypes from 'prop-types';

// == Style
import './styles.scss';
import {
  TextField,
  IconButton,
  CircularProgress,
} from '@mui/material';
import { BiChevronRight, BiCheck } from 'react-icons/bi';

// == Actions
import {
  openCloseConnectionModal, changeInputValue, submitLogin,
} from 'src/actions/authentification';
import { useSelector, useDispatch } from 'react-redux';

// ==Components
import ModalElement from 'src/components/ModalElement';

// == Composant
function ModalConnection({ reducerRoute }) {
  const dispatch = useDispatch();
  const modalElement = 'connectionModal';
  const {
    emailValue,
    passwordValue,
    isLoading,
    isError,
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
          onChange={(event) => dispatch(changeInputValue(event.target.value, 'emailValue', modalElement))}
        />
          <TextField
          type="password"
          id="password-input"
          label="Mot de passe"
          variant="outlined"
          required
          sx={{ width: '100%' }}
          value={passwordValue}
          onChange={(event) => dispatch(changeInputValue(event.target.value, 'passwordValue', modalElement))}
        />
        {isError && (
           <p className='loginfail'>Email ou mot de passe erroné</p>
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