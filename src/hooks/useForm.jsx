import { useEffect, useState } from 'react'

function useForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  })

  const [isEmailValid, setIsEmailValid] = useState(false)
  const [isNameValid, setIsNameValid] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)

  const validateEmail = (email) => {
    const re =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return re.test(String(email).toLowerCase())
  }

  const handleInputChange = (name) => (value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.target.value,
    }))

    if (name === 'email') {
      setIsEmailValid(validateEmail(value.target.value))
    }
  }

  useEffect(() => {
    const { name } = formData

    const isNameValid = name.trim() !== ''
    setIsNameValid(isNameValid)
    const isValid = isNameValid && isEmailValid
    setIsFormValid(isValid)
  }, [formData, isEmailValid])

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
    })
    setIsEmailValid(false)
    setIsFormValid(false)
  }

  return {
    formData,
    isFormValid,
    isNameValid,
    isEmailValid,
    handleInputChange,
    resetForm,
    setFormData,
  }
}

export default useForm
