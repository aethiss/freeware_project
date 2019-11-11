import { createReducer } from '../lib/ReducerHelper'

const initialState = []

const skills = createReducer(initialState, {
  SET_SKILL: (currentState, { skill }) => currentState.push(skill),
})

export default skills
