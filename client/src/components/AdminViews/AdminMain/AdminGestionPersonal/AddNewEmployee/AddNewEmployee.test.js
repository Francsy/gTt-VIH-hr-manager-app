import React from "react";
import { shallow } from "enzyme";
import AddNewEmployee from "./AddNewEmployee";

describe("AddNewEmployee", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AddNewEmployee />);
    expect(wrapper).toMatchSnapshot();
  });
});
