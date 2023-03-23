import React from "react";
import { shallow } from "enzyme";
import Solicitudes from "./Solicitudes";

describe("Solicitudes", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Solicitudes />);
    expect(wrapper).toMatchSnapshot();
  });
});
