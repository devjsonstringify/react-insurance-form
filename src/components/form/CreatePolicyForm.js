import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { createPolicy, isChanged } from '../../actions'
import Option from '../../common/Container.js'
import FormInput from '../../common/InputField'
import useForm from '../../common/useForm'
import { FormWrapper, StyledBootstrapCol } from './style.js'

const CreatePolicyForm = props => {
	const getData = () => props.createPolicy(`${values.policyName}`)
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
						placeholder="Enter policy name"
						value={values.policyName}
						name="policyName"
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
	createPolicy,
	isChanged
}

export default connect(
	mapToState,
	mapDispatchToProps
)(CreatePolicyForm)
