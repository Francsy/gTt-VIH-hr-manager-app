import React from "react";
import { shallow } from "enzyme";
import EmployeeAccesosCard from "./EmployeeAccesosCard";

describe("EmployeeAccesosCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<EmployeeAccesosCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
