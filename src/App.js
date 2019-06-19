import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './App.css'
import { StyledContainer } from './style.js'
import Form from './components/form/'
import SideImage from './components/SideImage/'

const App = () => {
	return (
		<StyledContainer fluid={true}>
			<Row>
				<SideImage />
				<Form />
			</Row>
		</StyledContainer>
	)
}

export default App
