import React from "react";
import { shallow } from "enzyme";
import EmployeeEventsCard from "./EventsCard";

describe("EventsCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<EmployeeEventsCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
