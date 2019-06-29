import React from 'react'
import { createStore } from 'redux'
import { ourDepartments } from '../reducers'

const store = createStore(
	ourDepartments,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
