import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import styled from 'styled-components'

const Field = ({ type, placeholder, value, name, onChange }) => {
	const StyledFormGroup = styled(Form)`
		margin: 0;
		padding: 0.25em;
		box-sizing: border-box;
	`
	return (
		<StyledFormGroup.Group>
			{type === 'number' ? (
				<InputGroup.Prepend>
					<InputGroup.Text>&#36;</InputGroup.Text>
				</InputGroup.Prepend>
			) : null}
			<Form.Control
				type={type}
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={onChange}
				autofocus
			/>
		</StyledFormGroup.Group>
	)
}

export default Field
