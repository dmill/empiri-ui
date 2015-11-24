import { combineReducers } from "redux";
import { SET_PROFILE, SET_ID_TOKEN } from "./actions";

function currentUser(state = null, action) {
  switch (action.type) {
    case SET_PROFILE:
      return { idToken: state.idToken, profile: action.payload };
    case SET_ID_TOKEN:
      return { idToken: action.payload, profile: state.profile };
    default:
      return { profile: null };
  }
}

const App = combineReducers({currentUser})

export default App
