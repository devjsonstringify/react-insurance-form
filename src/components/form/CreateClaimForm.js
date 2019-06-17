import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { createClaim, isChanged } from '../../actions'
import OptionForm from './UI/Container'
import FormInput from '../../common/FormInput'
import useForm from '../../common/useForm'

const CreateClaimForm = (props) => {
	const getData = () => {
		props.createClaim(`${values.policyName}`, `${values.amountToCollect}`)
	}
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
						placeholder="John Doe"
						name="policyName"
						value={values.policyName}
						onChange={handleChange}
					/>
				</div>
				<div className="form-group">
					<FormInput
						label="Amount to claim"
						type="number"
						name="amountToCollect"
						placeholder="500"
						value={values.amountToCollect}
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
	createClaim,
	isChanged
}
export default connect(
	mapToState,
	mapDispatchToProps
)(CreateClaimForm)
