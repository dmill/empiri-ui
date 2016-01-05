import { combineReducers } from 'redux'
import { SET_PROFILE, SET_ID_TOKEN, LOG_OUT, EXPAND_CONTRIBUTION } from './actions'

const data = {
  category: 'Bioinformatics',
  title: 'TIPR: transcription initiation pattern recognition on a genome scale',
  abstract: 'The computational identification of gene transcription start sites (TSSs) can provide insights into the regulation and function of genes without performing expensive experiments, particularly in organisms with incomplete annotations. High-resolution general-purpose TSS prediction remains a challenging problem, with little recent progress on the identification and differentiation of TSSs which are arranged in different spatial patterns along the chromosome.',
}

function currentUser(state = null, action) {
  switch (action.type) {
    case SET_PROFILE:
      return { idToken: state.idToken, profile: action.payload, data }
    case SET_ID_TOKEN:
      return { idToken: action.payload, profile: state.profile, data }
    case LOG_OUT:
      return { idToken: null, profile: null, data: null }
    default:
      return { profile: null }
  }
}

function currentHypothesis(state = null, action) {
  switch (action.type) {
    case EXPAND_CONTRIBUTION:
      return { contributionId: action.payload }
    default:
      return { contributionId: null }
  }
}

const App = combineReducers({ currentUser, currentHypothesis })
export default App
