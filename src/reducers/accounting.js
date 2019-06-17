
const accounting = (bagOfMoney = 100, action) => {
	if (action.type === 'CREATE_CLAIM') {
		return bagOfMoney - action.payload.amountOfMoneyToCollect
	} else if (action.type === 'CREATE_POLICY') {
		return bagOfMoney + action.payload.amount
	}
	return bagOfMoney
}

export default accounting
