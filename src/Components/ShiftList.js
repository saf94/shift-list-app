import React, { useEffect, useState } from "react";
import moment from "moment";
import { getShiftData } from "../api/shiftApi";
import { locum } from "../userConfig/user";

const ShiftList = () => {
    const shiftData = useFormattedShiftData();
    return shiftData.map((shift) => <div>{shift.practiceName}</div>);
};

const useFormattedShiftData = () => {
    const [shiftData, setShiftData] = useState([]);
    useEffect(() => {
        const getApiData = async () => {
            const apiResult = await getShiftData();
            const formattedData = apiResult.data
                .filter(filterShiftData)
                .map(formatShiftData);

            setShiftData(formattedData);
        };
        getApiData();
    }, []);

    return shiftData;
};

const formatShiftData = (shift) => {
    const shiftDate = moment(shift.startDatetime).format("YYYY-MM-DD");
    const startTime = moment(shift.startDatetime).format("HH:mm");
    const endTime = moment(shift.endDatetime).format("HH:mm");
    return {
        practiceName: shift.practice.name,
        shiftDate,
        startTime,
        endTime,
        hourlyRate: shift.hourlyRate,
        noOfApplications: shift.applicationIds.length
    };
};

const filterShiftData = (shift) => {
    const now = moment();
    if (shift.staffTypeId !== locum.staffTypeId) return false;
    if (!moment(shift.startDatetime).isAfter(now)) return false;
    if (shift.status !== "POSTED") return false;
    if (shift.locum && Object.keys(shift.locum).length > 0) return false;
    return true;
};

export default ShiftList;
