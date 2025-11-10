import React, { useContext } from 'react'
import { UserApiContext } from './UserApiContext'
import { FaUserInjured } from 'react-icons/fa'


const UserList = () => {
    const { users, loading } = useContext(UserApiContext)

    if (loading) return <p>loading...</p>

    return (
        <div>
            <h1><FaUserInjured />Users...</h1>
            <ul>
                {users.map((usr) => (
                    <li key={usr.id}>
                        {usr.name} = {usr.email}
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default UserList
