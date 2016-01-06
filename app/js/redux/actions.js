export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const LOG_OUT = 'LOG_OUT'
export const EXPAND_CONTRIBUTION = 'EXPAND_CONTRIBUTION'

export function setCurrentUser(userData) {
  return { type: SET_CURRENT_USER, payload: userData }
}

export function logout() {
  return { type: LOG_OUT, payload: null }
}

export function expandContribution(contributionId) {
  return { type: EXPAND_CONTRIBUTION, payload: contributionId }
}
