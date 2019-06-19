import React from 'react'
import { StyledImage } from './style.js'

const Img = ({ src, alt, ...props }) => {
	return <StyledImage src={src} alt={alt} />
}

export default Img
