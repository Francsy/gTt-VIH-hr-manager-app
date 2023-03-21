import React from "react";
import { shallow } from "enzyme";
import AdminGestionSolicitudes from "./AdminGestionSolicitudes";

describe("AdminGestionSolicitudes", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AdminGestionSolicitudes />);
    expect(wrapper).toMatchSnapshot();
  });
});
