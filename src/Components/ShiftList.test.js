import React from "react";
import { render, waitForElement } from "@testing-library/react";
import ShiftList from "./ShiftList";
import { getShiftData } from "../api/shiftApi";
import {
    mockShiftData,
    mockDataNonPosted,
    mockDataWithLocum,
    mockDataPastStart,
    mockDataWrongStaffType
} from "./mockShiftData";

jest.mock("../api/shiftApi");

describe("ShiftList", () => {
    it("should render shifts if there are valid available shifts", async () => {
        getShiftData.mockImplementation(() => Promise.resolve(mockShiftData));
        const { getByText } = render(<ShiftList />);
        const shift = await waitForElement(() =>
            getByText("Central London Hospital")
        );
        expect(shift).toBeTruthy();
    });

    it("should NOT render shift that does not match user ID", async () => {
        getShiftData.mockImplementation(() =>
            Promise.resolve(mockDataWrongStaffType)
        );
        const { getByText } = render(<ShiftList />);
        const shift = await waitForElement(() =>
            getByText("No shifts available")
        );
        expect(shift).toBeTruthy();
    });

    it("should NOT render shift that starts in the past", async () => {
        getShiftData.mockImplementation(() =>
            Promise.resolve(mockDataPastStart)
        );
        const { getByText } = render(<ShiftList />);
        const shift = await waitForElement(() =>
            getByText("No shifts available")
        );
        expect(shift).toBeTruthy();
    });

    it("should NOT render shift that is not of POSTED status", async () => {
        getShiftData.mockImplementation(() =>
            Promise.resolve(mockDataNonPosted)
        );
        const { getByText } = render(<ShiftList />);
        const shift = await waitForElement(() =>
            getByText("No shifts available")
        );
        expect(shift).toBeTruthy();
    });

    it("should NOT render shift that has a locum doctor", async () => {
        getShiftData.mockImplementation(() =>
            Promise.resolve(mockDataWithLocum)
        );
        const { getByText } = render(<ShiftList />);
        const shift = await waitForElement(() =>
            getByText("No shifts available")
        );
        expect(shift).toBeTruthy();
    });
});
