import { combineReducers } from 'redux'
import Immutable from 'immutable'
import {
  SET_CURRENT_USER,
  LOG_OUT,
  EXPAND_CONTRIBUTION,
  UPDATE_PEER_REVIEW,
  UPDATE_PUBLICATION,
  ADD_AUTHOR,
  DELETE_AUTHOR,
  ADD_SECTION,
  NEW_PUBLICATION
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
      return state
  }
}

const defaultPublication = Immutable.fromJS({
  id: null,
  title: null,
  abstract: null,
  _embedded: {
    authors: [],
    sections: []
  }
})

function publication(state = defaultPublication, action) {
  let authors
  let newState
  let sections
  switch(action.type) {
    case NEW_PUBLICATION:
      return defaultPublication

    case UPDATE_PUBLICATION:
      return state.merge(action.payload)

    case ADD_AUTHOR:
      authors = state._embedded.authors.concat(action.payload)
      newState = Object.assign({}, state)
      newState._embedded.authors = authors
      return newState
    case DELETE_AUTHOR:
      authors = state._embedded.authors.filter((author) => author.email !== action.payload)
      newState = Object.assign({}, state)
      newState._embedded.authors = authors
      return newState
    case ADD_SECTION:
      sections = state._embedded.sections.concat(action.payload)
      newState = Object.assign({}, state)
      newState._embedded.sections = sections
      return newState
    default:
      return state
  }
}

const App = combineReducers({ currentUser, peerReview, publication })
export default App
