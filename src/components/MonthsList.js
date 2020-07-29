import React from 'react';
import MonthItem from './MonthItem';

function MonthsList({months, onHover, unHover, getColor}) {
    return (
        <ul className="months-list">
            {months.map((month) => (
                <MonthItem
                    key = {month.id}
                    month = {month}
                    onHover = {onHover}
                    unHover = {unHover}
                    getColor = {getColor}
                />
            ))}
        </ul>
    )
}

export default MonthsList
