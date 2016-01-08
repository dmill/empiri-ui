import { combineReducers } from 'redux'
import {
  SET_CURRENT_USER,
  LOG_OUT,
  EXPAND_CONTRIBUTION,
  UPDATE_PEER_REVIEW,
} from './actions'

function peerReview(state = null, action) {
  switch(action.type) {
    case UPDATE_PEER_REVIEW:
      return action.payload
    default: return state
  }
}

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

const App = combineReducers({ currentUser, currentHypothesis, peerReview })
export default App
