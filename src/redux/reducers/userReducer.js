import { SET_USER_INFOS } from "../actions/actionTypes";

const INITIAL_STATE = {
  user: {
    name: '',
    age: 0,
    email: '',
  },
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER_INFOS:
      return { ...state, user: { ...action.payload } };
    default:
      return state;
  }
}

export default userReducer;