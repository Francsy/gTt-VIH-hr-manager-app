import React from "react";
import { shallow } from "enzyme";
import Employee from "./EmployeeViews";

describe("Employee", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Employee />);
    expect(wrapper).toMatchSnapshot();
  });
});
