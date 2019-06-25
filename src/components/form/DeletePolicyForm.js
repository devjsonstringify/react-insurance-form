import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { deletePolicy, isChanged } from '../../actions'
import Option from '../../common/Container.js'
import FormInput from '../../common/InputField'
import useForm from '../../common/useForm'
import { FormWrapper, StyledBootstrapCol } from './style.js'

const DeletePolicyForm = ({ request, ...props }) => {
	const getData = () => props.deletePolicy(`${values.policyName}`)
	const { values, handleChange, handleSubmit } = useForm(getData)
	return (
		<FormWrapper>
			<Option buttonText={request} dispatcher={handleSubmit}>
				<StyledBootstrapCol>
					<FormInput
						type="text"
						placeholder="Delete Policy Form"
						value={values.policyName}
						name="policyName"
						onChange={handleChange}
					/>
				</StyledBootstrapCol>
			</Option>
		</FormWrapper>
	)
}

const mapToState = ({ claimsHistory, isChange }) => {
	return {
		claimsHistory,
		isChange
	}
}

const mapDispatchToProps = {
	deletePolicy,
	isChanged
}

export default connect(
	mapToState,
	mapDispatchToProps
)(DeletePolicyForm)
