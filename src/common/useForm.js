import { useState } from 'react'

const useForm = (callback) => {
	const [values, setValues] = useState({
		policyName: '',
		amountToCollect: ''
	})

	const handleChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		})
		console.log(event.target.value)
	}

	const handleSubmit = (event) => {
		if (event) {
			event.preventDefault()
		}
		callback()
	}
	return { values, handleChange, handleSubmit }
}

export default useForm
