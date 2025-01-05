import ControlledForm from './components/ControlledForm.tsx'
import UncontrolledForm from './components/UncontrolledForm.tsx'
import { useState, useEffect } from 'react'

interface UserInterface {
  id: number
  name: string
  email: string
  username: string
}

const App = () => {
  const [users, setUsers] = useState<UserInterface[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        return response.json()
      })
      .then((data) => {
        setUsers(data)
      })
  }, [])

  return (
    <div className="container">
      <h1 className="my-5">Lesson 40</h1>

      <div className="row mb-5">
        <h2>Controlled form</h2>
        <ControlledForm />
      </div>

      <div className="row mb-5">
        <h2>Uncontrolled form</h2>
        <UncontrolledForm />
      </div>

      <h2 className="my-4">Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
