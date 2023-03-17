import React from "react";
import { shallow } from "enzyme";
import EmployeeHeader from "./EmployeeHeader";

describe("EmployeeHeader", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<EmployeeHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
