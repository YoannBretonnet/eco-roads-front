import {
    OPEN_CLOSE_CONNECTION_MODAL,
    CHANGE_INPUT_VALUE,
    SUBMIT_LOGIN, 
    SUBMIT_LOGIN_SUCCESS, 
    SUBMIT_LOGIN_FAILURE, 
    SUBMIT_DECONNEXION,
    OPEN_MENU,
  } from 'src/actions/authentification';
  
  export const initialState = {
    connectionModal: {
      isOpen: false,
      isConnected: false,
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
    openMenu: {
      isOpen: false
    }
    
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
               isLoading: true,
            },
          };
      case SUBMIT_LOGIN_SUCCESS:
        return {
          ...state,
             connectionModal: {
              ...state.connectionModal,
              isConnected: true,
              isOpen: false,
              emailValue: '',
              passwordValue: '',
              nickname: action.nickname,
              isLoading: false,
          },
        };
      case SUBMIT_LOGIN_FAILURE:
              return {
                  ...state,
                  isOpen: false,
                  connectionModal: {
                    ...state.connectionModal,
                    error: {
                      isError: false,
                      message: '',
                    },
                    isLoading: false,
                  },
                };
      case SUBMIT_DECONNEXION:
          return {
              ...state,
              nickname: null,
              isConnected: false,
              settings: {
                  ...state.settings,
                  emailValue: '',
                  passwordValue: '',
                  isLogged: false,
                  hasFailed: false
              }
          };
        case OPEN_MENU:
            return {
                ...state,
                openMenu: {
                    ...state.openMenu,
                    isOpen: true
                }
            };
      default:
        return state;
    }
  };
  
  export default reducer;