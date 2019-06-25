import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import styled from 'styled-components'
import Slug from '../common/slug.js'

const OptionForm = ({ dispatcher, children, buttonText, isSubmit }) => {
	const StyledForm = styled(Form)`
		margin: 0;
	`

	return (
		<Form onSubmit={dispatcher}>
			{children}
			<Button block disabled={isSubmit} type="submit">
				{Slug(buttonText)}
			</Button>
		</Form>
	)
}

export default OptionForm
