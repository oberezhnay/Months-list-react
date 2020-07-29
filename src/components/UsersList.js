import React from 'react';
import UserItem from './UserItem';

function UsersList({users}) {
    return (
        <ul className="users-list">
            {users.map((user) => (
            <UserItem
                key = {user.id}
                user = {user}
            />
            ))}
        </ul>
    )
}

export default UsersList
