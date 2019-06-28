import React, { Fragment, useState } from 'react'
import { StyledBootstrapCol } from './style.js'
import CreateClaimForm from './CreateClaimForm'
import CreatePolicyForm from './CreatePolicyForm'
import DeletePolicyForm from './DeletePolicyForm'
import InsuranceVault from '../../common/insuranceVault'

const PolicyForms = ({ request, ...props }) => {
	return (
		<StyledBootstrapCol>
			{request === 'CREATE_POLICY' && <CreatePolicyForm request={request} />}
			{request === 'CREATE_CLAIM' && <CreateClaimForm request={request} />}
			{request === 'DELETE_POLICY' && <DeletePolicyForm request={request} />}
			<InsuranceVault />
		</StyledBootstrapCol>
	)
}
export default PolicyForms
