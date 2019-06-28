import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import { createClaim, isChanged } from '../../actions'
import Option from '../../common/Container.js'
import FormInput from '../../common/InputField'
import useForm from '../../common/useForm'
import { FormWrapper, StyledBootstrapCol } from './style.js'

const CreateClaimForm = ({
	isSubmit,
	onBlur,
	request,
	createClaim,
	...props
}) => {
	const toastify = {
		type: toast.TYPE.SUCCESS,
		autoClose: 1000
	}

	const initialState = {
		policyName: '',
		amountToCollect: ''
	}
	const {
		handleSubmit,
		handleChange,
		handleBlur,
		values,
		errors,
		isSubmitting
	} = useForm(initialState, validateAuth, setClaim)

	function validateAuth(values) {
		let errors = {}
		// policyName Errors
		if (!values.policyName) {
			errors.policyName = 'Required policy name'
		}
		// Password Errors
		if (!values.amountToCollect) {
			errors.amountToCollect = 'Required amount of money to collect'
		} else if (values.amountToCollect.length === 0) {
			errors.amountToCollect = 'amountToCollect must be at least 1 digit'
		}
		return errors
	}

	function setClaim() {
		const user = values.policyName
		const amount = values.amountToCollect
		createClaim(`${user}`, `${amount}`)
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
					<FormInput
						className={errors.amountToCollect && 'error-input'}
						type="number"
						placeholder="Ex: 100"
						value={values.amountToCollect}
						name="amountToCollect"
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
	createClaim,
	isChanged
}
export default connect(
	mapToState,
	mapDispatchToProps
)(CreateClaimForm)
