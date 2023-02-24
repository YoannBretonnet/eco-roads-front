import {
    OPEN_CLOSE_CONNECTION_MODAL,
    CHANGE_INPUT_VALUE,
    SUBMIT_LOGIN, 
    SUBMIT_LOGIN_SUCCESS, 
    SUBMIT_LOGIN_FAILURE, 
    SUBMIT_DECONNEXION
  } from 'src/actions/authentification';
  
  export const initialState = {
    connectionModal: {
      isOpen: false,
      emailValue: '',
      passwordValue: '',
      nickname: '',
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
        case SUBMIT_LOGIN:
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
      case SUBMIT_LOGIN_SUCCESS:
        return {
          ...state,
          nickname: action.nickname,
          connectionModal: {
            ...state.connectionModal,
            error: {
              isError: false,
              message: '',
            },
            isLoading: false,
          },
        };
      case SUBMIT_LOGIN_FAILURE:
              return {
                  ...state,
                  settings: {
                      ...state.settings,
                      isLoading: false,
                      hasFailed: true,
                  }
              };
      case SUBMIT_DECONNEXION:
          return {
              ...state,
              nickname: null,
              settings: {
                  ...state.settings,
                  emailValue: '',
                  passwordValue: '',
                  isLogged: false,
                  hasFailed: false
              }
          };
      default:
        return state;
    }
  };
  
  export default reducer;