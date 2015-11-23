import { combineReducers } from "redux";
import { SET_CURRENT_USER, SET_ID_TOKEN } from "./actions";

function currentUser(state = null, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { idToken: state.idToken, profile: action.payload };
    case SET_ID_TOKEN:
      return { idToken: action.payload, profile: state.profile };
    default:
      return { profile: null };
  }
}

const App = combineReducers({currentUser})

export default App
