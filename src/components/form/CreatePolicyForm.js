import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import { createPolicy, isChanged } from '../../actions'
import Option from '../../common/Container.js'
import FormInput from '../../common/InputField'
import useForm from '../../common/useForm'
import { FormWrapper, StyledBootstrapCol } from './style.js'

const CreatePolicyForm = ({
	isSubmit,
	onBlur,
	request,
	createPolicy,
	...props
}) => {
	const toastify = {
		type: toast.TYPE.SUCCESS,
		autoClose: 1000
	}
	const initialState = {
		policyName: ''
	}
	const {
		handleSubmit,
		handleChange,
		handleBlur,
		values,
		errors,
		isSubmitting
	} = useForm(initialState, validateAuth, setPolicy)

	function validateAuth(values) {
		let errors = {}
		// policyName Errors
		if (!values.policyName) {
			errors.policyName = 'Required policy name'
		}
		return errors
	}

	function setPolicy() {
		const user = values.policyName
		createPolicy(`${user}`)
		toast('success', toastify)
	}

	return (
		<FormWrapper>
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
						onChange={handleChange}
						onBlur={handleBlur}
					/>
				</StyledBootstrapCol>
			</Option>
		</FormWrapper>
	)
}

const mapToState = ({ isChange }) => {
	return {
		isChange
	}
}

const mapDispatchToProps = {
	createPolicy,
	isChanged
}

export default connect(
	mapToState,
	mapDispatchToProps
)(CreatePolicyForm)
