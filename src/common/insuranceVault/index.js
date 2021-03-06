import React from 'react'
import { Col, Badge, Alert } from 'react-bootstrap'
import { connect } from 'react-redux'
import { accounting } from '../../redux/store/'

const InsuranceVault = ({ accounting, ...props }) => {
	//If accounting is 0
	const isEmpty = accounting < 1
	return (
		<Col className="mt-3">
			<Alert variant="light">
				<p className="mb-0">
					Right now our vault has
					<Badge
						variant={isEmpty ? 'danger' : 'success'}
						className="ml-2"
					>
						{isEmpty ? `no money` : accounting}
					</Badge>
				</p>
			</Alert>
		</Col>
	)
}
const mapToState = ({ accounting }) => {
	return {
		accounting
	}
}

export default connect(
	mapToState,
	null
)(InsuranceVault)
