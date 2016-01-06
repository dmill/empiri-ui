import { combineReducers } from 'redux'
import {
  SET_CURRENT_USER,
  LOG_OUT,
  EXPAND_CONTRIBUTION,
} from './actions'

function currentUser(state = null, action) {
  switch(action.type) {
    case SET_CURRENT_USER:
      return action.payload
    case LOG_OUT:
      return null
    default:
      return state
  }
}

function currentHypothesis(state = null, action) {
  switch(action.type) {
    case EXPAND_CONTRIBUTION:
      return { contributionId: action.payload }
    default:
      return { state }
  }
}

const App = combineReducers({ currentUser, currentHypothesis })
export default App
