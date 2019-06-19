import { Col, Table } from 'react-bootstrap'
import styled from 'styled-components'
import Image from '../../assets/images/jon-tyson-228428-unsplash.jpg'

export const StyledBootstrapCol = styled(Col)`
	background-image: url(${Image});
	height: 100vh;
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
`

export const StyledBootstrapTable = styled(Table)``
