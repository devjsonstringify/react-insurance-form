import { useState, useEffect } from 'react'

const useForm = (validate, callback) => {
	const [values, setValues] = useState({
		policyName: '',
		amountToCollect: ''
	})
	const [errors, setErrors] = useState({})
	const [isSubmitting, setSubmitting] = useState(false)

	const handleChange = event => {
		event.preventDefault()
		setValues({
			...values,
			[event.target.name]: event.target.value
		})
	}

	useEffect(() => {
		if (isSubmitting) {
			const noErrors = Object.keys(errors).length === 0
			if (noErrors) {
				console.log(
					'authenticated!',
					values.policyName,
					values.amountToCollect
				)
				setSubmitting(false)
			} else {
				setSubmitting(false)
			}
		}
	}, [errors])

	const handleBlur = () => {
		const validationErrors = validate(values)
		setErrors(validationErrors)
	}

	const handleSubmit = event => {
		event.preventDefault()
		setSubmitting(true)
		const validationErrors = validate(values)
		setErrors(validationErrors)
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
