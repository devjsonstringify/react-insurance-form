import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RequestForms from './RequestForms'

const InsuranceForm = () => {
	return (
		<Container>
			<Row>
				<Col>
					<RequestForms />
				</Col>
				<Col>2 of 2</Col>
			</Row>
		</Container>
	)
}

export default InsuranceForm
