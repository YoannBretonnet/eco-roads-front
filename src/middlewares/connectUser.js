// == Initialisation
import axios from 'axios'; 

// == Actions
import {SUBMIT_LOGIN, submitLoginSuccess, submitLoginFailure } from 'src/actions/authentification'

// == Composant
const authMiddleware = (store) => (next) => (action) => {
  if (action.type === SUBMIT_LOGIN) {
  next (action);
  const state = store.getState ();
  const config = {
  method: 'post',
  url: 'https://server-yb.netlify.app/.netlify/functions/api/login',
  headers: { 
    'Content-Type': 'application/json'
  },
  data: {
    email: state.auth.connectionModal.emailValue,
    password: state.auth.connectionModal.passwordValue,
    },
  };
  axios(config) 
  .then((response) => {
    store.dispatch(submitLoginSuccess(response.data.pseudo));
    console.log ('login success')
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
  