import React from "react";
import { shallow } from "enzyme";
import RevisarSolicitud from "./RevisarSolicitud";

describe("RevisarSolicitud", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<RevisarSolicitud />);
    expect(wrapper).toMatchSnapshot();
  });
});
