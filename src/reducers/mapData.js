import {
    OPEN_CLOSE_MENU,
  } from 'src/actions/usability';


  
  export const initialState = {
    departureLongitude: -1.54027,
    departureLatitude: 47.21129,
    arrivalLongitude: -2.00719, 
    arrivalLatitude: 48.63575,

  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case OPEN_CLOSE_MENU:
        return {
          ...state,
          menu: {
            ...state.menu,
            isOpen: action.state,
          },
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  