import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const START_NEW_SESSION = 'START_NEW_SESSION';

export const getNotes = () => dispatch => {
  // let's do some async stuff! Thanks react-thunk :)
  dispatch({ type: START_NEW_SESSION });
};
