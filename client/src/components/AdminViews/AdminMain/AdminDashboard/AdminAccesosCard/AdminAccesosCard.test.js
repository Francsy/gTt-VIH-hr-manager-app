import React from "react";
import { shallow } from "enzyme";
import AdminAccesosCard from "./AdminAccesosCard";

describe("AdminAccesosCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AdminAccesosCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
