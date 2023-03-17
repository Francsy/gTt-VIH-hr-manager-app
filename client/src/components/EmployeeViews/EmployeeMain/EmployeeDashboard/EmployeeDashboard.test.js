import React from "react";
import { shallow } from "enzyme";
import EmployeeDashboard from "./EmployeeDashboard";

describe("EmployeeDashboard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<EmployeeDashboard />);
    expect(wrapper).toMatchSnapshot();
  });
});
