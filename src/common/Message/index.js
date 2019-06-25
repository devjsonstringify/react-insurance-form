import React, { useState } from 'react'
import { StyledBootstrapCol, StyledBootstrapAlert } from './style.js'
import Slug from '../slug.js'

const Message = ({ text, ...props }) => {
	return (
		<StyledBootstrapAlert variant="primary">
			<h5>{text}</h5>
		</StyledBootstrapAlert>
	)
}

export default Message
