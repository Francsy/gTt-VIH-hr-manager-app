import React from "react";
import { shallow } from "enzyme";
import AusenciasCard from "./AusenciasCard";

describe("AusenciasCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AusenciasCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
