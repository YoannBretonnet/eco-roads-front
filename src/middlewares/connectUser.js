import axios from 'axios'; 
import {SUBMIT_LOGIN, submitLoginSuccess, submitLoginFailure } from 'src/store/actions/authentification'

const authMiddleware = (store) => (next) => (action) => {

  if (action.type === SUBMIT_LOGIN) {
  next (action);
  const state = store.getState ();

  const config = {
  method: 'post',
  url: 'https://chatroom-server-yb.netlify.app/.netlify/functions/api/login',
  headers: { 
    'Content-Type': 'application/json'
  },
  data: {
    email: state.settings.emailValue,
    password: state.settings.passwordValue,
    },
  };

  axios(config)
  .then((response) => {
    store.dispatch(submitLoginSuccess(response.data.pseudo));
  })
  .catch((error) => {
    console.log(error);
    store.dispatch(submitLoginFailure());
  });

  } else {
    next(action);
  }
    
  };
  
  export default authMiddleware;
  