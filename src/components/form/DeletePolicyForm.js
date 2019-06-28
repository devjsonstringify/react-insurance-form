import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import { deletePolicy } from '../../redux/actions'
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
	} = useForm(initialState, validateAuth, setDelete)

	function validateAuth(values) {
		let errors = {}
		// policyName Errors
		if (!values.policyName) {
			errors.policyName = 'Required policy name'
		}
		return errors
	}

	function setDelete() {
		let user = values.policyName
		deletePolicy(`${user}`)
		toast('success', toastify)
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

const mapDispatchToProps = {
	deletePolicy
}

export default connect(
	null,
	mapDispatchToProps
)(DeletePolicyForm)
