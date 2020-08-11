import React, { useEffect, useState } from "react";
import { getShiftData } from "../api/shiftApi";

function ShiftList() {
    const [shiftData, setShiftData] = useState([]);
    useEffect(() => {
        const getApiData = async () => {
            const apiResult = await getShiftData();
            setShiftData(apiResult.data);
        };
        getApiData();
    }, []);

    return shiftData.map((shift) => <div>{shift.practice.name}</div>);
}

export default ShiftList;
