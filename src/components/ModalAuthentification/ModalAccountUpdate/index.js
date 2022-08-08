/* eslint-disable max-len */
/* eslint-disable react/jsx-closing-tag-location */
// == Import
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';

// == Style
import './styles.scss';

import {
  TextField,
  IconButton,
  FormHelperText,
  CircularProgress,
  Alert,
  Box,
  Button,
} from '@mui/material';

import {
  BiChevronRight,
  BiError,
  BiCheck,
  BiUndo,
} from 'react-icons/bi';

import {
  openCloseAccountUpdateModal,
  changeInputValue,
  openCloseAcountUpdateAlert,
  deleteAccount,
  updateUserSecurityParam,
} from 'src/actions/authentification';

import { useSelector, useDispatch } from 'react-redux';

import ModalElement from 'src/components/ModalElement';
import InputPassword from '../InputPassword';

// == Composant
function ModalAccountUpdate({ reducerRoute }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modalElement = 'accountUpdateModal';
  const inputEmailElement = 'emailValue';
  const inputUserNameElement = 'userNameValue';
  const {
    userNameValue,
    emailValue,
    error,
    isLoading,
  } = useSelector((state) => state.auth[modalElement]);
  const {
    isDeleteAlert,
  } = useSelector((state) => state.auth.accountDeleteAlert);
  const {
    error: deleteError,
  } = useSelector((state) => state.auth.accountDeleteAction);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(updateUserSecurityParam());
  };
  return (
    <ModalElement
      dispatchCall={openCloseAccountUpdateModal}
      modalElement={modalElement}
      reducerRoute={reducerRoute}
    >
      <h1 className="modal-title">Modifiez vos paramètre de sécurité</h1>
      <form
        className="modal-form-update-account"
        onSubmit={
          handleSubmit
        }
      >
        <TextField
          id="userName-input"
          label="Nom Utilisateur"
          variant="outlined"
          sx={{ width: '100%' }}
          value={userNameValue}
          onChange={(event) => dispatch(changeInputValue(event.target.value, inputUserNameElement, modalElement))}
        />
        <TextField
          type="email"
          id="email-input"
          label="Email"
          variant="outlined"
          sx={{ width: '100%' }}
          value={emailValue}
          onChange={(event) => dispatch(changeInputValue(event.target.value, inputEmailElement, modalElement))}
        />
        <InputPassword
          modalElement={modalElement}
          updatePage
        />
        <Button
          variant="outlined"
          color="error"
          onClick={() => dispatch(openCloseAcountUpdateAlert())}
        >
          Supprimer votre&nbsp;compte&nbsp;?
        </Button>
        {error.isError && (
        <FormHelperText
          error={error.isError}
        >{DOMPurify.sanitize(error.message, { USE_PROFILES: { html: false } })}</FormHelperText>
        )}
        {deleteError.isError && (
        <FormHelperText
          error={deleteError.isError}
        >{DOMPurify.sanitize(deleteError.message, { USE_PROFILES: { html: false } })}</FormHelperText>
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
      {
        isDeleteAlert && (
        <Alert
          icon={<BiError />}
          severity="error"
          sx={{
            position: 'absolute', top: '105%', display: 'flex', flexDirection: 'row', alignItems: 'center',
          }}
        >
          <Box
            component="div"
            sx={{
              display: 'flex', flexDirection: 'row', alignItems: 'center',
            }}
          >
            <p>
              Êtes vous sur ?
            </p>
            <IconButton
              sx={{ color: '#4caf50' }}
              onClick={() => {
                dispatch(deleteAccount(navigate));
                dispatch(openCloseAcountUpdateAlert());
              }}
            >
              <BiCheck />
            </IconButton>
            <IconButton
              sx={{ color: '#ef5350' }}
              onClick={() => dispatch(openCloseAcountUpdateAlert())}
            >
              <BiUndo />
            </IconButton>
          </Box>
        </Alert>
        )
      }
    </ModalElement>
  );
}

ModalAccountUpdate.propTypes = {
  reducerRoute: PropTypes.string.isRequired,
};

// == Export
export default ModalAccountUpdate;
