import React from 'react'
import { InputGroup, Row, Col } from 'react-bootstrap'
import { StyledBootrapGroup, StyledBootrapInput } from './styled.js'

export default ({
	type,
	placeholder,
	value,
	name,
	onBlur,
	className,
	onChange,
	isDisable
}) => {
	return (
		<StyledBootrapGroup>
			<StyledBootrapInput
				type={type}
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				className={className}
				disabled={isDisable}
				autoFocus
			/>
		</StyledBootrapGroup>
	)
}
