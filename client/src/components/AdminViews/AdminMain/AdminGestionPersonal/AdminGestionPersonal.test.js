import React from "react";
import { shallow } from "enzyme";
import AdminPersonal from "./AdminGestionPersonal";

describe("AdminGestionPersonal", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AdminPersonal />);
    expect(wrapper).toMatchSnapshot();
  });
});
