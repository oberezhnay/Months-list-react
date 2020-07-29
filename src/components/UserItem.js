import React from 'react';

function UserItem(user) {
    return (
        <li>
            {user.user.firstName} {user.user.lastName}
        </li>
    )
}

export default UserItem
