import React from "react";
import { render } from "@testing-library/react";
import Shift from "./Shift";

describe("Shift", () => {
    const mockProps = {
        practiceName: "test name",
        shiftDate: "01-01-2020",
        startTime: "12:00",
        endTime: "16:00",
        hourlyRate: "100",
        noOfApplications: "2"
    };
    it("should render practice name", () => {
        const { getByText } = render(<Shift {...mockProps} />);
        expect(getByText("test name")).toBeDefined();
    });
    it("should render shift date", () => {
        const { getByText } = render(<Shift {...mockProps} />);
        expect(getByText("Shift date: 01-01-2020")).toBeDefined();
    });
    it("should render start time", () => {
        const { getByText } = render(<Shift {...mockProps} />);
        expect(getByText("Start time: 12:00")).toBeDefined();
    });
    it("should render end time", () => {
        const { getByText } = render(<Shift {...mockProps} />);
        expect(getByText("End time: 16:00")).toBeDefined();
    });
    it("should render hourly rate", () => {
        const { getByText } = render(<Shift {...mockProps} />);
        expect(getByText("Hourly Rate: £100")).toBeDefined();
    });
    it("should render number of applications", () => {
        const { getByText } = render(<Shift {...mockProps} />);
        expect(getByText("Number of applications: 2")).toBeDefined();
    });
});
