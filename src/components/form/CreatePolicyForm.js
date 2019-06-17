import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { createPolicy, isChanged } from '../../actions'
import OptionForm from './UI/Container'
import FormInput from '../../common/FormInput'
import useForm from '../../common/useForm'

const CreatePolicyForm = (props) => {
	const getData = () => props.createPolicy(`${values.policyName}`)
	const { values, handleChange, handleSubmit } = useForm(getData)
	const FormWrapper = styled.div`
		border: 1px solid #ccc;
		border-radius: 3px;
		padding: 1em;
		box-sizing: border-box;
	`
	return (
		<FormWrapper>
			<OptionForm buttonText={props.isChange.request} dispatcher={handleSubmit}>
				<div className="form-group">
					<FormInput
						type="text"
						placeholder="Enter policy name"
						value={values.policyName}
						name="policyName"
						onChange={handleChange}
					/>
				</div>
			</OptionForm>
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
