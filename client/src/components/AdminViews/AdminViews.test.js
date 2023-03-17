import React from "react";
import { shallow } from "enzyme";
import AdminViews from "./AdminViews";

describe("Admin", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Admin />);
    expect(wrapper).toMatchSnapshot();
  });
});
