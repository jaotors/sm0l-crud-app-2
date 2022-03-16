import React, { useState } from 'react'
import List from './components/List'

import './App.css'

const USER_DATA = [
  {
    id: 1,
    username: 'jaotors',
    firstname: 'jao',
    lastname: 'turingan'
  },
  {
    id: 2,
    username: 'jao',
    firstname: 'jao',
    lastname: 'turingan'
  }
]

function App() {
  // USERS
  const [users, setUsers] = useState([])

  //FORM
  const [username, setUsername] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const [isEditingId, setIsEditingId] = useState(0)
  const [isEditing, setIsEditing] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isEditing) {
      editUser(isEditingId)
      setIsEditing(false)
      return
    }

    addUser()
    setIsEditing(false)
  }

  const handleInputChange = (callback, value) => {
    callback(value)
  }

  const handleDelete = (id) => {
    const newUsers = users.filter((user) => user.id !== id)
    setUsers(newUsers)
  }

  const editUser = (id) => {
    const selectedUser = users.find((user) => user.id === id)
    selectedUser.username = username
    selectedUser.firstName = firstName
    selectedUser.lastName = lastName
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...selectedUser } : user
    )
    setUsers(updatedUsers)
    resetInputs()
  }

  const addUser = () => {
    const newUser = { id: users.length, username, firstName, lastName }
    setUsers([...users, newUser])
    resetInputs()
  }

  const resetInputs = () => {
    setFirstName('')
    setLastName('')
    setUsername('')
  }

  const handleEdit = (id) => {
    setIsEditingId(id)
    setIsEditing(true)
    const selectedUser = users.find((user) => user.id === id)
    setFirstName(selectedUser.firstName)
    setLastName(selectedUser.lastName)
    setUsername(selectedUser.username)
  }

  return (
    <div className='App'>
      <div className='user-form'>
        <h3>User Form</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              name='username'
              value={username}
              onChange={(e) => {
                handleInputChange(setUsername, e.target.value)
              }}
              id='username'
            />
          </div>
          <div>
            <label htmlFor='firstname'>First name:</label>
            <input
              type='text'
              name='firstname'
              value={firstName}
              onChange={(e) => {
                handleInputChange(setFirstName, e.target.value)
              }}
              id='firstname'
            />
          </div>
          <div>
            <label htmlFor='lastname'>Last name:</label>
            <input
              type='text'
              name='lastname'
              value={lastName}
              onChange={(e) => {
                handleInputChange(setLastName, e.target.value)
              }}
              id='lastname'
            />
          </div>
          <button>Submit</button>
        </form>
      </div>

      <List users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  )
}

export default App
