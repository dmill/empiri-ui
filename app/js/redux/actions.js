export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const LOG_OUT = 'LOG_OUT'
export const EXPAND_CONTRIBUTION = 'EXPAND_CONTRIBUTION'
export const UPDATE_REVIEW = 'UPDATE_REVIEW'
export const NEW_REVIEW = 'NEW_REVIEW'
export const UPDATE_PUBLICATION = 'UPDATE_PUBLICATION'
export const ADD_AUTHOR = 'ADD_AUTHOR'
export const DELETE_AUTHOR = 'DELETE_AUTHOR'
export const ADD_SECTION = 'ADD_SECTION'
export const DELETE_SECTION = 'DELETE_SECTION'
export const NEW_PUBLICATION = 'NEW_PUBLICATION'
export const ADD_FIGURE = 'ADD_FIGURE'
export const UPDATE_FIGURE = 'UPDATE_FIGURE'
export const UPDATE_SECTION = 'UPDATE_SECTION'

export function updatePublication(publicationData) {
  return { type: UPDATE_PUBLICATION, payload: publicationData }
}

export function updateReview(reviewData) {
  return { type: UPDATE_REVIEW, payload: reviewData }
}

export function newReview() {
  return { type: NEW_REVIEW, payload: null }
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

export function addFigure(figure) {
  return { type: ADD_FIGURE, payload: figure }
}

export function updateFigure(payload) {
  return { type: UPDATE_FIGURE, payload: payload }
}

export function updateSection(payload) {
  return { type: UPDATE_SECTION, payload: payload }
}
