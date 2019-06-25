import React, { useState, Fragment } from 'react'
import store from '../../store'
import { connect } from 'react-redux'
import {
	createClaim,
	createPolicy,
	deletePolicy,
	isChanged
} from '../../actions'
import Option from './../../common/Options/'
import PolicyForms from './PolicyForms'

const RequestForms = props => {
	const [initial, setInitial] = useState('CREATE_POLICY')

	const handleChange = event => {
		event.preventDefault()
		setInitial(event.target.value)
	}

	const options = [
		{ value: 'CREATE_POLICY', displayValue: 'CREATE POLICY', Id: 1 },
		{ value: 'CREATE_CLAIM', displayValue: 'CREATE CLAIM', Id: 2 },
		{ value: 'DELETE_POLICY', displayValue: 'DELETE POLICY', Id: 3 }
	]

	return (
		<Fragment>
			<Option
				onChange={handleChange}
				initialValue={initial}
				options={options}
			/>
			<PolicyForms request={initial} />
		</Fragment>
	)
}

const mapToState = ({ accounting, claimsHistory, policies, isChange }) => {
	return {
		accounting,
		claimsHistory,
		policies,
		isChange
	}
}

const mapDispatchToProps = {
	createClaim,
	createPolicy,
	deletePolicy,
	isChanged
}

export default connect(
	mapToState,
	mapDispatchToProps
)(RequestForms)
