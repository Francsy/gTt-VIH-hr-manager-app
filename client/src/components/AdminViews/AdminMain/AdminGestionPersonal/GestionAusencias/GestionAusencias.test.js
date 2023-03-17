import React from "react";
import { shallow } from "enzyme";
import GestionAusencias from "./GestionAusencias";

describe("GestionAusencias", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<GestionAusencias />);
    expect(wrapper).toMatchSnapshot();
  });
});
