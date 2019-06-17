import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import CreateClaimForm from './CreateClaimForm'
import CreatePolicyForm from './CreatePolicyForm'
import DeletePolicyForm from './DeletePolicyForm'

const PolicyForms = (props) => {
	const { request } = props.isChange
	return (
		<Fragment>
			{request === 'CREATE_POLICY' && <CreatePolicyForm />}
			{request === 'CREATE_CLAIM' && <CreateClaimForm />}
			{request === 'DELETE_POLICY' && <DeletePolicyForm />}
		</Fragment>
	)
}
const mapToState = ({ isChange }) => {
	return {
		isChange
	}
}

export default connect(
	mapToState,
	null
)(PolicyForms)
