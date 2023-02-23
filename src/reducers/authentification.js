import {
    OPEN_CLOSE_CONNECTION_MODAL,
    CHANGE_INPUT_VALUE,
    CONNECT_USER,
    CONNECT_USER_FAIL,
    CONNECT_USER_SUCCESS,
  } from 'src/actions/authentification';
  
  export const initialState = {
    connectionModal: {
      isOpen: false,
      emailValue: '',
      passwordValue: '',
      error: {
        isError: false,
        message: undefined,
      },
      isLoading: false,
    },
    initialUserAccount: {
      userName: undefined,
      email: undefined,
      id: undefined,
      car: undefined,
      location: undefined,
      categories: [],
    },
    isConnected: false,
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case OPEN_CLOSE_CONNECTION_MODAL:
        return {
          ...state,
          connectionModal: {
            ...state.connectionModal,
            isOpen: !state.connectionModal.isOpen,
          },
        };
      case CHANGE_INPUT_VALUE:
        return {
          ...state,
          [action.modalElement]: {
            ...state[action.modalElement],
            [action.inputElement]: action.inputValue,
          },
        };
      case CONNECT_USER:
        return {
          ...state,
          connectionModal: {
            ...state.connectionModal,
            emailValue: '',
            passwordValue: '',
            isLoading: true,
          },
          accountCreationModal: {
            ...state.accountCreationModal,
            isRegisteredAlert: false,
          },
        };
      case CONNECT_USER_FAIL:
        return {
          ...state,
          connectionModal: {
            ...state.connectionModal,
            error: {
              isError: true,
              message: action.message,
            },
            isLoading: false,
          },
        };
      case CONNECT_USER_SUCCESS:
        return {
          ...state,
          connectionModal: {
            ...state.connectionModal,
            error: {
              isError: false,
              message: '',
            },
            isLoading: false,
          },
        };
      default:
        return state;
    }
  };
  
  export default reducer;