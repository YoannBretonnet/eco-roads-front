export const OPEN_CLOSE_CONNECTION_MODAL = 'OPEN_CLOSE_CONNECTION_MODAL';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const CONNECT_USER = 'CONNECT_USER';
export const CONNECT_USER_FAIL = 'CONNECT_USER_FAIL';
export const CONNECT_USER_SUCCESS = 'CONNECT_USER_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const openCloseConnectionModal = () => ({
  type: OPEN_CLOSE_CONNECTION_MODAL,
});


export const changeInputValue = (inputValue, inputElement, modalElement) => ({
  type: CHANGE_INPUT_VALUE,
  inputValue,
  inputElement,
  modalElement,
});


export const connectUser = () => ({
  type: CONNECT_USER,
});

export const connectUserFail = (message) => ({
  type: CONNECT_USER_FAIL,
  message,
});

export const connectUserSuccess = (isLogin) => ({
  type: CONNECT_USER_SUCCESS,
  isLogin,
});

export const openCloseAccountUpdateModal = () => ({
  type: OPEN_CLOSE_ACCOUNT_UPDATE_MODAL,
});

export const logout = (navigate) => ({
  type: LOGOUT,
  navigate,
});
