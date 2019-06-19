import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { createClaim, isChanged } from '../../actions'
import Option from '../../common/Container.js'
import FormInput from '../../common/InputField'
import useForm from '../../common/useForm'
import { FormWrapper, StyledBootstrapCol } from './style.js'

const CreateClaimForm = props => {
	const getData = () => {
		props.createClaim(`${values.policyName}`, `${values.amountToCollect}`)
	}
	const { values, handleChange, handleSubmit } = useForm(getData)
	return (
		<FormWrapper>
			<Option
				buttonText={props.isChange.request}
				dispatcher={handleSubmit}
			>
				<StyledBootstrapCol>
					<FormInput
						type="text"
						placeholder="John Doe"
						name="policyName"
						value={values.policyName}
						onChange={handleChange}
					/>
				</StyledBootstrapCol>
				<StyledBootstrapCol>
					<FormInput
						label="Amount to claim"
						type="number"
						name="amountToCollect"
						placeholder="500"
						value={values.amountToCollect}
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
