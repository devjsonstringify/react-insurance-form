import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { deletePolicy, isChanged } from '../../actions'
import Option from '../../common/Container.js'
import FormInput from '../../common/InputField'
import useForm from '../../common/useForm'
import { FormWrapper, StyledBootstrapCol } from './style.js'

const DeletePolicyForm = ({
	isSubmit,
	onBlur,
	request,
	deletePolicy,
	...props
}) => {
	const {
		handleSubmit,
		handleChange,
		handleBlur,
		values,
		errors,
		isSubmitting
	} = useForm(validateAuth, setDelete)

	function validateAuth(values) {
		let errors = {}
		// policyName Errors
		if (!values.policyName) {
			errors.policyName = 'Required policy name'
		}
		return errors
	}

	function setDelete() {
		deletePolicy(`${values.policyName}`)
	}

	return (
		<FormWrapper>
			{/*<pre>{JSON.stringify(errors, null, 2)}</pre>
			<pre>{JSON.stringify(isSubmitting, null, 2)}</pre>*/}
			<Option
				buttonText={request}
				dispatcher={handleSubmit}
				isSubmit={isSubmitting}
			>
				<StyledBootstrapCol>
					<FormInput
						className={errors.policyName && 'error-input'}
						type="text"
						placeholder="Ex: John Doe"
						value={values.policyName}
						name="policyName"
						onBlur={handleBlur}
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
