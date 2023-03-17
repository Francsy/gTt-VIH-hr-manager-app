import React from "react";
import { shallow } from "enzyme";
import AdminNavBar from "./AdminNavBar";

describe("AdminNavBar", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AdminNavBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
