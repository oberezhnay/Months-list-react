import React from 'react';
import UsersList from './UsersList';

function MonthItem({month, onHover, unHover, getColor}) {  
    return (
        <div>
            <li 
                className={`month-item ${getColor(month.users.length)}`}
                onMouseMove={() => onHover(month.id)}
                onMouseLeave={() => unHover(month.id)} 
            >{month.month}
            </li>
            {month.showUsers ? <UsersList users={month.users} /> : ''}
        </div>
    )
}

export default MonthItem
