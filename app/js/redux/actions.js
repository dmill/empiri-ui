export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const LOG_OUT = 'LOG_OUT'
export const EXPAND_CONTRIBUTION = 'EXPAND_CONTRIBUTION'
export const UPDATE_PEER_REVIEW = 'UPDATE_PEER_REVIEW'
export const UPDATE_PUBLICATION = 'UPDATE_PUBLICATION'
export const ADD_AUTHOR = 'ADD_AUTHOR'
export const DELETE_AUTHOR = 'DELETE_AUTHOR'
export const ADD_SECTION = 'ADD_SECTION'
export const DELETE_SECTION = 'DELETE_SECTION'
export const NEW_PUBLICATION = 'NEW_PUBLICATION'

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

export function deleteAuthor(email) {
  return { type: DELETE_AUTHOR, payload: email }
}

export function addSection(section) {
  return { type: ADD_SECTION, payload: section }
}

export function newPublication() {
  return { type: NEW_PUBLICATION, payload: null }
}

export function deleteSection(position) {
  return { type: DELETE_SECTION, payload: position }
}
