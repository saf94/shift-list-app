import React from "react";

const Shift = ({
    practiceName,
    shiftDate,
    startTime,
    endTime,
    hourlyRate,
    noOfApplications
}) => (
    <div data-testid="shift">
        <h3>{practiceName}</h3>
        <p>Shift date: {shiftDate}</p>
        <p>Start time: {startTime}</p>
        <p>End time: {endTime}</p>
        <p>Hourly Rate: £{hourlyRate}</p>
        <p>Number of applications: {noOfApplications}</p>
    </div>
);

export default Shift;
