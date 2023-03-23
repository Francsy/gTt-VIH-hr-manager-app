import React from "react";
import { shallow } from "enzyme";
import ViewsSelector from "./ViewsSelector";

describe("ViewsSelector", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ViewsSelector />);
    expect(wrapper).toMatchSnapshot();
  });
});
