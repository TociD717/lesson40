import { ChangeEvent, FormEvent, useState } from 'react'

interface FormData {
  username: string
  password: string
}

const initialFormData: FormData = {
  username: '',
  password: ''
}

const ControlledForm = () => {
  const [formData, setFormData] = useState(initialFormData)

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  return (
    <form className="col-6" onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input value={formData.username} onChange={handleInputChange} type="text" id="username"
               className="form-control" name="username"
               placeholder="Username" />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input value={formData.password} onChange={handleInputChange} type="text" id="password"
               className="form-control" name="password"
               placeholder="Password" />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  )
}

export default ControlledForm