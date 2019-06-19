import React from 'react'

const claimsHistory = (oldListsOfClaims = [], action) => {
	if (action.type === 'CREATE_CLAIM') {
		return [...oldListsOfClaims, action.payload]
	}
	return oldListsOfClaims
}

export default claimsHistory
