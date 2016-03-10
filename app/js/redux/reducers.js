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
  DELETE_SECTION,
  ADD_FIGURE,
  UPDATE_FIGURE,
  NEW_PEER_REVIEW,
  UPDATE_SECTION
} from './actions'

const defaultPeerReview = Immutable.fromJS({
  title: '',
  body: ''
})

function peerReview(state = defaultPeerReview, action) {
  switch(action.type) {
    case NEW_PEER_REVIEW:
      return defaultPeerReview

    case UPDATE_PEER_REVIEW:
      return action.payload

    default:
      return state
  }
}

const defaultUser = { id: null }
function currentUser(state = defaultUser, action) {
  switch(action.type) {
    case SET_CURRENT_USER:
      return action.payload
    case LOG_OUT:
      return defaultUser
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
    sections: [],
    users: []
  }
})

function publication(state = defaultPublication, action) {
  let currentSection, updatedSection, prunedSections, updatedSections, prunedFigures, updatedFigures

  switch(action.type) {
    case NEW_PUBLICATION:
      return defaultPublication

    case UPDATE_PUBLICATION:
      return state.mergeDeep(Immutable.fromJS(action.payload))

    case ADD_AUTHOR:
      return state.updateIn(['_embedded', 'authors'], (authors) => authors.push(Immutable.fromJS(action.payload)))

    case DELETE_AUTHOR:
      return state.updateIn(['_embedded', 'authors'], (authors) => authors.filterNot(author => author.get('id') === action.payload))

    case ADD_SECTION:
      return state.updateIn(['_embedded', 'sections'], (sections) => sections.push(Immutable.fromJS(action.payload)))

    case UPDATE_SECTION:
      return state.updateIn(['_embedded', 'sections'], (sections) => {
        return sections.map((section) => {
          if (section.get('id') == action.payload.id) {
            return Immutable.fromJS(action.payload)
          } else {
            return section
          }
        })
      })

    case DELETE_SECTION:
      return state.updateIn(['_embedded', 'sections'], (sections) => sections.filterNot(section => section.get('id') === action.payload))

    case ADD_FIGURE:
      return state.updateIn(['_embedded', 'sections'], (sections) => {
        return sections.map((section) => {
          if (section.get('id') == action.payload.section_id) {
            return section.update('figures', (figures) => figures.push(Immutable.fromJS(action.payload)))
          } else {
            return section
          }
        })
      })

    case UPDATE_FIGURE:
      currentSection = state.getIn(['_embedded', 'sections']).filter(section => section.get('id') === action.payload.section_id).get(0)
      prunedFigures = currentSection.get('figures').filterNot(figure => figure.get('id') === action.payload.id)
      updatedFigures = prunedFigures.insert(action.payload.position, Immutable.fromJS(action.payload))
      updatedSection = currentSection.update('figures', figures => updatedFigures)
      prunedSections = state.getIn(['_embedded', 'sections']).filterNot(section => section.get('id') === action.payload.section_id)
      updatedSections = prunedSections.insert(currentSection.get('position'), updatedSection)
      return state.updateIn(['_embedded', 'sections'], sections => updatedSections)

    default:
      return state
  }
}

const App = combineReducers({ currentUser, peerReview, publication })
export default App
