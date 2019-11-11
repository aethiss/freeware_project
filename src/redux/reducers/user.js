import { createReducer } from '../lib/ReducerHelper'

const initialState = { user: {}, isLogin: false }

const user = createReducer(initialState, {
  SET_USER: (currentState, { user }) => ({ ...user, isLogin: true }),
})

export default user
