import React from "react";
import { shallow } from "enzyme";
import EmployeeNavBar from "./EmployeeSideNavBar";

describe("EmployeeNavBar", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<EmployeeNavBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
