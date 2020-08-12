export const mockShiftData = {
    data: [
        {
            applicationIds: [],
            endDatetime: "2021-05-19T19:15:00+00:00",
            hourlyRate: 100,
            id: "1234",
            locum: undefined,
            practice: {
                id: "1234",
                name: "Central London Hospital"
            },
            staffType: "gp",
            staffTypeId: "1",
            startDatetime: "2021-05-19T16:50:00+00:00",
            status: "POSTED"
        }
    ]
};
export const mockDataWrongStaffType = {
    data: [
        {
            applicationIds: [],
            endDatetime: "2021-05-19T19:15:00+00:00",
            hourlyRate: 100,
            id: "1234",
            locum: undefined,
            practice: {
                id: "1234",
                name: "Central London Hospital"
            },
            staffType: "gp",
            staffTypeId: "7",
            startDatetime: "2021-05-19T16:50:00+00:00",
            status: "POSTED"
        }
    ]
};
export const mockDataPastStart = {
    data: [
        {
            applicationIds: [],
            endDatetime: "2018-05-19T19:15:00+00:00",
            hourlyRate: 100,
            id: "1234",
            locum: undefined,
            practice: {
                id: "1234",
                name: "Central London Hospital"
            },
            staffType: "gp",
            staffTypeId: "1",
            startDatetime: "2018-05-19T16:50:00+00:00",
            status: "POSTED"
        }
    ]
};
export const mockDataNonPosted = {
    data: [
        {
            applicationIds: [],
            endDatetime: "2021-05-19T19:15:00+00:00",
            hourlyRate: 100,
            id: "1234",
            locum: undefined,
            practice: {
                id: "1234",
                name: "Central London Hospital"
            },
            staffType: "gp",
            staffTypeId: "1",
            startDatetime: "2021-05-19T16:50:00+00:00",
            status: "DRAFT"
        }
    ]
};
export const mockDataWithLocum = {
    data: [
        {
            applicationIds: [],
            endDatetime: "2021-05-19T19:15:00+00:00",
            hourlyRate: 100,
            id: "1234",
            locum: { id: "1234", firstName: "Jane", lastName: "Doe" },
            practice: {
                id: "1234",
                name: "Central London Hospital"
            },
            staffType: "gp",
            staffTypeId: "1",
            startDatetime: "2021-05-19T16:50:00+00:00",
            status: "POSTED"
        }
    ]
};
