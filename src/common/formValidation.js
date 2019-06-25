export default function validateAuth(values) {
  let errors = {}
  // policyName Errors
  if (!values.policyName) {
    errors.policyName = 'Required policy name'
  }
  // Password Errors
  if (!values.amountToCollect) {
    errors.amountToCollect = 'Required amount of money to collect'
  } else if (values.amountToCollect.length === 0) {
    errors.amountToCollect = 'amountToCollect must be at least 1 digit'
  }
  return errors
}

