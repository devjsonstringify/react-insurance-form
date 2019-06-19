import React, { useState } from 'react'
import { StyledBootstrapCol, StyledBootstrapAlert } from './style.js'
import Slug from '../slug.js'

const Message = props => {
	return (
		<StyledBootstrapAlert variant="primary">
			<h5>What Are Your Interests?</h5>
		</StyledBootstrapAlert>
	)
}

export default Message
