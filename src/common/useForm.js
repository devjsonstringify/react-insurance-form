import { useState, useEffect } from 'react'

const useForm = (initialState, validate, callback) => {
	const [values, setValues] = useState(initialState)
	const [errors, setErrors] = useState({})
	const [isSubmitting, setSubmitting] = useState(false)

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			console.log('success' + ' ' + JSON.stringify(values, null, 2))
			callback()
		} else {
			setSubmitting(false)
		}
	}, [callback, errors, isSubmitting, values])

	const handleChange = (event) => {
		event.preventDefault()
		setValues({
			...values,
			[event.target.name]: event.target.value
		})
	}

	const handleBlur = () => {
		const validationErrors = validate(values)
		setErrors(validationErrors)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		const validationErrors = validate(values)
		setErrors(validationErrors)
		setSubmitting(true)
	}
	return {
		handleSubmit,
		handleChange,
		handleBlur,
		values,
		errors,
		isSubmitting
	}
}

export default useForm
