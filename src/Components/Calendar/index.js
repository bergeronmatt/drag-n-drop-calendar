import React from 'react'
import Scheduler, {Resource} from 'devextreme-react/scheduler'

import { employees, data } from '../_calendarComponents/data'
import { DataCell } from '../_calendarComponents/DataCell'
import { ResourceCell } from '../_calendarComponents/ResourceCell'

const currentDate = Date.now();
const groups = ['employeeID']
const views = ['day', 'week', 'month']

export default function MyCalendar() {

  return (
    <Scheduler
        timeZone='America/New_York'
        dataSource={data}
        dataCellComponent={DataCell}
        resourceCellComponent={ResourceCell}
        groups={groups}
        views={views}
        defaultCurrentView={'month'}
        defaultCurrentDate={currentDate}
        height={600}
        showAllDayPanel={true}
        firstDayOfWeek={1}
        startDayHour={8}
        endDayHour={18}
    >   
        <Resource 
            label="Employee"
            fieldExpr="employeeID"
            dataSource={employees}
            allowMultiple={false}
        />
    </Scheduler>
  )
}
