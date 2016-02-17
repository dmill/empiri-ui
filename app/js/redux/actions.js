export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const LOG_OUT = 'LOG_OUT'
export const EXPAND_CONTRIBUTION = 'EXPAND_CONTRIBUTION'
export const UPDATE_PEER_REVIEW = 'UPDATE_PEER_REVIEW'
export const UPDATE_PUBLICATION = 'UPDATE_PUBLICATION'
export const ADD_AUTHOR = 'ADD_AUTHOR'

export function updatePublication(publicationData) {
  return { type: UPDATE_PUBLICATION, payload: publicationData }
}

export function setCurrentUser(userData) {
  return { type: SET_CURRENT_USER, payload: userData }
}

export function logout() {
  return { type: LOG_OUT, payload: null }
}

export function expandContribution(contributionId) {
  return { type: EXPAND_CONTRIBUTION, payload: contributionId }
}

export function updatePeerReview(text) {
  return { type: UPDATE_PEER_REVIEW, payload: text }
}

export function addAuthor(data) {
  return { type: ADD_AUTHOR, payload: data }
}

