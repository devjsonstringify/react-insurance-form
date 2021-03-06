import { combineReducers } from 'redux'
import claimsHistory from './claimsHistory'
import accounting from './accounting'
import policies from './policies'

export const ourDepartments = combineReducers({
	accounting: accounting,
	claimsHistory: claimsHistory,
	policies: policies
})
