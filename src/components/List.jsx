import React, { useEffect, useState } from 'react'

const List = ({ users, onEdit, onDelete }) => {
  const [userList, setUserList] = useState(users)
  const [search, setSearch] = useState('')

  const handleSearchChange = (e) => {
    const { value } = e.target
    setSearch(value)
  }

  useEffect(() => {
    if (search === '') {
      setUserList(users)
    } else {
      setUserList(users.filter((user) => user.username.match(search)))
    }
  }, [search, users])

  return (
    <div className='user-list-container'>
      <h3>User List</h3>
      <input type="text" value={state} onChange={(e) => {
        setSomething(e.target.value)
      }} />
      <div>
        <label htmlFor='search'>search: </label>
        <input
          type='text'
          id='search'
          value={search}
          onChange={handleSearchChange}
        />
        <p>{search}</p>
      </div>
      <ul className='user-list'>
        {userList.map(({ id, username, lastName, firstName }) => {
          return (
            <li key={id + username}>
              <span>{id}</span>
              <span>{username}</span>
              <span>{firstName}</span>
              <span>{lastName}</span>
              <span>
                <button onClick={() => onEdit(id)}>Edit</button>
              </span>
              <span>
                <button onClick={() => onDelete(id)}>Delete</button>
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default List
