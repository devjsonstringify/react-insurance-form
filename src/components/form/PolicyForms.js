import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { StyledBootstrapCol } from './style.js'
import CreateClaimForm from './CreateClaimForm'
import CreatePolicyForm from './CreatePolicyForm'
import DeletePolicyForm from './DeletePolicyForm'

const PolicyForms = props => {
	const { request } = props.isChange
	return (
		<StyledBootstrapCol>
			{!request ? <CreatePolicyForm /> : ''}
			{request === 'CREATE_POLICY' && <CreatePolicyForm />}
			{request === 'CREATE_CLAIM' && <CreateClaimForm />}
			{request === 'DELETE_POLICY' && <DeletePolicyForm />}
		</StyledBootstrapCol>
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
