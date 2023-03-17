import React from "react";
import { shallow } from "enzyme";
import GestionHoras from "./GestionHoras";

describe("GestionHoras", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<GestionHoras />);
    expect(wrapper).toMatchSnapshot();
  });
});
