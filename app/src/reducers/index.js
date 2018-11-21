/*
  Be sure to import in all of the action types from `../actions`
*/

import { START_NEW_SESSION } from '../actions/index';

const initialState = {
  newSession: false,
  error: null
};

/*
  You'll only need one note reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default (state = initialState, action) => {
  switch (action.type) {
    case START_NEW_SESSION:
      return {
        ...state,
        newSession: true
      };

    default:
      return state;
  }
};
