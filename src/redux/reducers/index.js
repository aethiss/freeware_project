import { combineReducers } from 'redux'

import projects from './projects'
import user from './user'
import skills from './skills'

export default combineReducers({
  projects,
  user,
  skills,
})
