import React from 'react'
import { InputGroup, Row, Col } from 'react-bootstrap'
import { StyledBootrapGroup, StyledBootrapInput } from './styled.js'

export default ({ type, placeholder, value, name, onChange }) => {
	return (
		<StyledBootrapGroup>
			<StyledBootrapInput
				type={type}
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={onChange}
				autoFocus
			/>
		</StyledBootrapGroup>
	)
}

