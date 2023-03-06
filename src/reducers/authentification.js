// == Actions
import {
    OPEN_CLOSE_CONNECTION_MODAL,
    CHANGE_INPUT_VALUE,
    SUBMIT_LOGIN, 
    SUBMIT_LOGIN_SUCCESS, 
    SUBMIT_LOGIN_FAILURE, 
    SUBMIT_DECONNEXION,
    OPEN_MENU,
  } from 'src/actions/authentification';
  
// == State
  export const initialState = {
    connectionModal: {
      isOpen: false,
      isConnected: false,
      emailValue: '',
      passwordValue: '',
      nickname: '',
      isError: false,
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
  
  // == Composant
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case OPEN_CLOSE_CONNECTION_MODAL:
        return {
          ...state,
          connectionModal: {
            ...state.connectionModal,
            isOpen: !state.connectionModal.isOpen,
            isError: false,
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
              isError: false,
          },
        };
      case SUBMIT_LOGIN_FAILURE:
              return {
                  ...state,
                  isOpen: false,
                  connectionModal: {
                    ...state.connectionModal,
                    isError: true,
                    isLoading: false,
                  },
                };
      case SUBMIT_DECONNEXION:
        return {
          ...state,
             connectionModal: {
              ...state.connectionModal,
              isConnected: false,
              isOpen: false,
              emailValue: '',
              passwordValue: '',
              nickname: action.nickname,
              isLoading: false
             },
              openMenu: {
                ...state.openMenu,
                isOpen: false,
          },
        };
        case OPEN_MENU:
            return {
                ...state,
                openMenu: {
                    ...state.openMenu,
                    isOpen: !state.openMenu.isOpen,
                }
            };
      default:
        return state;
    }
  };
    
  export default reducer;