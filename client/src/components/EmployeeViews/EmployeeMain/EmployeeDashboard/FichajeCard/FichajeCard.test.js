import React from "react";
import { shallow } from "enzyme";
import FichajeCard from "./FichajeCard";

describe("FichajeCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FichajeCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
