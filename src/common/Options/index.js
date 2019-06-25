import React, { useState } from 'react'
import { Form, Col } from 'react-bootstrap'
import { Input } from './style.js'
import Message from '../../common/Message/'

export default ({ initialValue, onChange, options, ...props }) => {
	return (
		<Form.Group>
			<Message text="What are your interests?" />
			<Form.Control as="select" onChange={onChange} value={initialValue}>
				{options.map(({ Id, value, displayValue }) => (
					<option key={Id} value={value}>
						{displayValue}
					</option>
				))}
			</Form.Control>
		</Form.Group>
	)
}
