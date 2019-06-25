import React from 'react'
import { Form } from 'react-bootstrap'
import styled from 'styled-components'

export const Input = styled(Form)`
	margin: 0 0 0.5em 0;
	height: calc(1.5em + 1rem + 2px);
	padding: 0.375rem 0.75rem;
	display: block;
	width: 100%;
	font-weight: 400;
	line-height: 1.5;
	color: #495057;
	background-clip: padding-box;
	border-radius: 0.25rem;
	border-color: #343a40 !important;
	border: 2px solid #dee2e6;
	border-bottom: 5px solid #343a40;
	border-right: 5px solid #343a40;
`
