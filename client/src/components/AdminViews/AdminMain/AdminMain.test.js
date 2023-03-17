import React from "react";
import { shallow } from "enzyme";
import AdminMain from "./AdminMain";

describe("AdminMain", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AdminMain />);
    expect(wrapper).toMatchSnapshot();
  });
});
