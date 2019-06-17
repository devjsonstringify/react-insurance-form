import React from 'react'
import { Form } from 'react-bootstrap'

const Option = ({ onChange, optionList }) => {
	return (
		<Form.Group>
			<Form.Control size="lg" as="select" onChange={onChange}>
				<option value="">--Please choose an option--</option>
				{optionList.map((key) => (
					<option value={key.value}>{key.item}</option>
				))}
			</Form.Control>
		</Form.Group>
	)
}

export default Option
