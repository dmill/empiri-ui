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
  NEW_PUBLICATION,
  DELETE_SECTION
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
  switch(action.type) {
    case NEW_PUBLICATION:
      return defaultPublication

    case UPDATE_PUBLICATION:
      return state.merge(Immutable.Map(action.payload))

    case ADD_AUTHOR:
      return state.updateIn(['_embedded', 'authors'], (authors) => authors.push(Immutable.Map(action.payload)))

    case DELETE_AUTHOR:
      return state.updateIn(['_embedded', 'authors'], (authors) => authors.delete(Immutable.Map(action.payload)))

    case ADD_SECTION:
      return state.updateIn(['_embedded', 'sections'], (sections) => sections.push(Immutable.Map(action.payload)))

    case DELETE_SECTION:
      return state.updateIn(['_embedded', 'sections'], (sections) => sections.filterNot(section => section.get('id') === action.payload))

    default:
      return state
  }
}

const App = combineReducers({ currentUser, peerReview, publication })
export default App
