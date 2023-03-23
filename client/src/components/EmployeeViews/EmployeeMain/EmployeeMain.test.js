import React from "react";
import { shallow } from "enzyme";
import EmployeeMain from "./EmployeeMain";

describe("EmployeeMain", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<EmployeeMain />);
    expect(wrapper).toMatchSnapshot();
  });
});
