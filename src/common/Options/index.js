import React from 'react'
import { Form } from 'react-bootstrap'
import { StyledBootrapInput } from './style.js'

const Option = ({ onChange, optionList }) => {
	return (
		<Form.Group className="mb-0">
			<StyledBootrapInput size="lg" as="select" onChange={onChange}>
				{optionList.map(({ value, item }) => (
					<option key={value} value={value}>
						{item}
					</option>
				))}
			</StyledBootrapInput>
		</Form.Group>
	)
}

export default Option
