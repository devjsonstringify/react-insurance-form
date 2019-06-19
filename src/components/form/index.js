import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RequestForms from './RequestForms'
import { StyledBootstrapCol, StyledOuter, StyledInner } from './style.js'

const InsuranceForm = () => {
	return (
		<StyledBootstrapCol lg={6}>
			<StyledOuter>
				<StyledInner>
					<RequestForms />
				</StyledInner>
			</StyledOuter>
		</StyledBootstrapCol>
	)
}

export default InsuranceForm
