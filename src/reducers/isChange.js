import React from 'react'

const initialState = {
	request: '',
	status: false
}

const isChange = (request = initialState, action) => {
	if (action.type === 'IS_CHANGED') {
		return {
			request: action.payload.request,
			status: action.payload.status
		}
	}

	return request
}

export default isChange
