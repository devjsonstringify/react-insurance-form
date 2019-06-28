export const createClaim = (name, amountOfMoneyToCollect) => {
	return {
		type: 'CREATE_CLAIM',
		payload: {
			name: name,
			amountOfMoneyToCollect: amountOfMoneyToCollect
		}
	}
}

export const createPolicy = name => {
	return {
		type: 'CREATE_POLICY',
		payload: {
			name: name,
			amount: 20
		}
	}
}

export const deletePolicy = name => {
	return {
		type: 'DELETE_POLICY',
		payload: {
			name: name
		}
	}
}
