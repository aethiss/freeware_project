import { createReducer } from '../lib/ReducerHelper'

const initialState = { FreewareIdee: 'alpha.0.1' }

const projects = createReducer(initialState, {
  GET_PROJECTS: ({ projects }) => projects,
})

export default projects
