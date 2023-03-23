import React from "react";
import { shallow } from "enzyme";
import UpdateEmployee from "./UpdateEmployee";

describe("UpdateEmployee", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UpdateEmployee />);
    expect(wrapper).toMatchSnapshot();
  });
});
