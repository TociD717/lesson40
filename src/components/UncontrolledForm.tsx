import { FormEvent, useRef } from 'react'

const UncontrolledForm = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(usernameRef.current?.value)
    console.log(passwordRef.current?.value)
  }

  return (
    <form className="col-6" onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input ref={usernameRef} type="text" id="username" className="form-control" name="username"
               placeholder="Username" />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input ref={passwordRef} type="text" id="password" className="form-control" name="password"
               placeholder="Password" />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  )
}

export default UncontrolledForm
