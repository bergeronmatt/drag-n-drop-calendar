import React from 'react'

function isWeekEnd(date) {
    const day = date.getDay();
    return day === 0 || day === 6
}

function getCurrentTraining(date, employeeId) {
    const result = (date + employeeId) % 3;
    const currentTraining = `training-background-${result}`;
    return currentTraining
}

export const DataCell = (props) => {
  
    const {data: {startDate, groups: {employeeId}, text}} = props
    const dayClasses = [
        'day-cell',
        getCurrentTraining(startDate.getDate(), employeeId),
    ];

    const employeeClasses = [`employee-${employeeId}`, 'dx-template-wrapper'];
    if(isWeekEnd(startDate)) {
        employeeClasses.push(`employee-weekend-${employeeId}`);
    }

    return (
    <div className={employeeClasses.join(' ')}>
        <div className={dayClasses.join(' ')}>
            {text}
        </div>
    </div>
  )
}
