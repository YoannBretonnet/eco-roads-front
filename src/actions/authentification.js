export const OPEN_CLOSE_CONNECTION_MODAL = 'OPEN_CLOSE_CONNECTION_MODAL';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_LOGIN_SUCCESS = 'SUBMIT_LOGIN_SUCCESS';
export const SUBMIT_LOGIN_FAILURE = 'SUBMIT_LOGIN_FAILURE';
export const SUBMIT_DECONNEXION = 'SUBMIT_DECONNEXION';
export const OPEN_MENU = 'OPEN_MENU';

export const openCloseConnectionModal = () => ({
  type: OPEN_CLOSE_CONNECTION_MODAL,
});


export const changeInputValue = (inputValue, inputElement, modalElement) => ({
  type: CHANGE_INPUT_VALUE,
  inputValue,
  inputElement,
  modalElement,
});


export const submitLogin = () => ({
  type: SUBMIT_LOGIN
})

export const submitLoginSuccess = (nickname) => ({
  type: SUBMIT_LOGIN_SUCCESS,
  nickname
})

export const submitLoginFailure = () => ({
  type: SUBMIT_LOGIN_FAILURE
})

export const submitDeconnexion = () => ({
  type: SUBMIT_DECONNEXION
})

export const openMenu = () => ({
  type: OPEN_MENU
})