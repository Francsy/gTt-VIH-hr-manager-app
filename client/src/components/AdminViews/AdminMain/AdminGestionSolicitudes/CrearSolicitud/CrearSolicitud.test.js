import React from "react";
import { shallow } from "enzyme";
import CrearSolicitud from "./CrearSolicitud";

describe("CrearSolicitud", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CrearSolicitud />);
    expect(wrapper).toMatchSnapshot();
  });
});
