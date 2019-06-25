import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { createClaim, isChanged } from '../../actions'
import Option from '../../common/Container.js'
import FormInput from '../../common/InputField'
import useForm from '../../common/useForm'
import { FormWrapper, StyledBootstrapCol } from './style.js'

const CreateClaimForm = ({ request, ...props }) => {
	const getData = () =>
		props.createClaim(`${values.policyName}`, `${values.amountToCollect}`)

	const { values, handleChange, handleSubmit } = useForm(getData)
	return (
		<FormWrapper>
			<Option buttonText={request} dispatcher={handleSubmit}>
				<StyledBootstrapCol>
					<FormInput
						type="text"
						placeholder="Create claim form"
						value={values.policyName}
						name="policyName"
						onChange={handleChange}
					/>
					<FormInput
						type="number"
						placeholder="amount To Collect"
						value={values.amountToCollect}
						name="amountToCollect"
						onChange={handleChange}
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
