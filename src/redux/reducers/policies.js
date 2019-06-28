import React from 'react'

const policies = (listsOfPolicies = [], action) => {
	if (action.type === 'CREATE_POLICY') {
		return [...listsOfPolicies, action.payload.name]
	} else if (action.type === 'DELETE_POLICY') {
		return listsOfPolicies.filter((policy) => policy != action.payload.name)
	}
	return listsOfPolicies
}

export default policies
