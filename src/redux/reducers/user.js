import {UPDATE_USER, FETCH_USER, LOGOUT} from './../actionTypes';

const initialState = {
  login: 'anonymous',
  isLoggedIn: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {...action.payload, isLoggedIn: true};
    case FETCH_USER:
      return {...action.payload, isLoggedIn: true};
    case LOGOUT:
      return {...initialState};
    default:
      return state;
  }
};

export default user;
