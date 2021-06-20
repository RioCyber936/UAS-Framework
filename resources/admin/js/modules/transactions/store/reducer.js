import {
  TRANSACTIONs_LIST
} from './action-types'

const initialState = {
  currentPage: 0,
  data: [],
  from: 0,
  lastPage: 0,
  nextPageUrl: '',
  path: '',
  perPage: 0,
  prevPageUrl: null,
  to: 0,
  total: 0,
}

const reducer = (state = initialState, { type, payload = null }) => {
  switch(type) {
    case TRANSACTIONs_LIST:
      return list(state, payload)
    default:
      return state
  }
}

function list(state, payload) {
  state = Object.assign({}, payload)

  return state
}

export default reducer
