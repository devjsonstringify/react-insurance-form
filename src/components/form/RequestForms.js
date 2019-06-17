import React, { Fragment, useState } from 'react'
import store from '../../store'
import { connect } from 'react-redux'
import {
	createClaim,
	createPolicy,
	deletePolicy,
	isChanged
} from '../../actions'
import Options from '../../common/options'
import PolicyForms from './PolicyForms'

const RequestForms = (props) => {
	const handleChange = (event) => props.isChanged(event.target.value)
	const options = [
		{ value: 'CREATE_POLICY', item: 'CREATE POLICY' },
		{ value: 'CREATE_CLAIM', item: 'CREATE CLAIM' },
		{ value: 'DELETE_POLICY', item: 'CREATE POLICY' }
	]

	return (
		<Fragment>
			<Options onChange={handleChange} optionList={options} />
			<PolicyForms data={handleChange} />
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
