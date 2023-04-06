import React from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

class Calendar extends React.Component {
    render() {
        return (
            <FullCalendar
                plugins={[timeGridPlugin]}
                initialView="timeGridWeek"
            />
        );
    }
}

export default Calendar;
