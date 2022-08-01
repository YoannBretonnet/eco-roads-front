import {
  OPEN_CLOSE_CONNECTION_MODAL,
  MAKE_PASSWORD_VISIBLE_OR_NOT,
  CHANGE_INPUT_VALUE,
  OPEN_CLOSE_ACCOUNT_CREATION_MODAL,
  CONNECT_USER,
  CONNECT_USER_FAIL,
  CONNECT_USER_SUCCESS,
  GET_PROFIL_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  OPEN_CLOSE_ACCOUNT_UPDATE_MODAL,
  OPEN_CLOSE_ACCOUNT_UPDATE_ALERT,
} from 'src/actions/authentification';

export const initialState = {
  connectionModal: {
    isOpen: false,
    isHiddenPassword: false,
    emailValue: '',
    passwordValue: '',
    error: {
      isError: false,
      message: undefined,
    },
    isLoading: false,
  },
  accountCreationModal: {
    isOpen: false,
    isHiddenPassword: false,
    userNameValue: '',
    emailValue: '',
    passwordValue: '',
    error: {
      isError: false,
      message: undefined,
    },
    isRegisteredAlert: false,
  },
  accountUpdateModal: {
    isOpen: false,
    isHiddenPassword: false,
    userNameValue: '',
    emailValue: '',
    passwordValue: '',
    error: {
      isError: false,
      message: undefined,
    },
    isUpdatedAlert: false,
  },
  accountDeleteAlert: {
    error: {
      isError: false,
      message: undefined,
    },
    isDeleteAlert: false,
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
    case MAKE_PASSWORD_VISIBLE_OR_NOT:
      return {
        ...state,
        [action.modalElement]: {
          ...state[action.modalElement],
          isHiddenPassword: !state[action.modalElement].isHiddenPassword,
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
    case OPEN_CLOSE_ACCOUNT_CREATION_MODAL:
      return {
        ...state,
        connectionModal: {
          ...state.connectionModal,
          isOpen: false,
        },
        accountCreationModal: {
          ...state.accountCreationModal,
          isOpen: !state.accountCreationModal.isOpen,
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
    case GET_PROFIL_SUCCESS:
      return {
        ...state,
        initialUserAccount: {
          ...state.initialUserAccount,
          userName: action.data.username,
          email: action.data.email,
          id: action.data.id,
          car: action.data.car,
          location: action.data.location,
          categories: [
            ...action.data.categories,
          ],
        },
        accountUpdateModal: {
          ...state.accountUpdateModal,
          userNameValue: action.data.username,
          emailValue: action.data.email,
        },
        isConnected: true,
      };
    case REGISTER_USER:
      return {
        ...state,
        accountCreationModal: {
          ...state.accountCreationModal,
          isLoading: true,
        },
      };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        accountCreationModal: {
          ...state.accountCreationModal,
          userNameValue: '',
          emailValue: '',
          passwordValue: '',
          error: {
            isError: true,
            message: action.message,
          },
          isLoading: false,
        },
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        accountCreationModal: {
          ...state.accountCreationModal,
          userNameValue: '',
          emailValue: '',
          passwordValue: '',
          error: {
            isError: false,
            message: '',
          },
          isLoading: false,
          isRegisteredAlert: true,
        },
      };
    case OPEN_CLOSE_ACCOUNT_UPDATE_MODAL:
      return {
        ...state,
        accountUpdateModal: {
          ...state.accountUpdateModal,
          isOpen: !state.accountUpdateModal.isOpen,
        },
      };
    case OPEN_CLOSE_ACCOUNT_UPDATE_ALERT:
      return {
        ...state,
        accountDeleteAlert: {
          ...state.accountDeleteAlert,
          isDeleteAlert: !state.accountDeleteAlert.isDeleteAlert,
        },
      };
    default:
      return state;
  }
};

export default reducer;
