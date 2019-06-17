import React from 'react'
import { Form, Button } from 'react-bootstrap'
import styled from 'styled-components'

const OptionForm = ({ dispatcher, children, buttonText }) => {
	const StyledForm = styled(Form)`
		margin: 0;
	`
	return (
		<StyledForm onSubmit={dispatcher}>
			{children}
			<Button variant="primary" type="submit">
				{buttonText}
			</Button>
		</StyledForm>
	)
}

export default OptionForm
