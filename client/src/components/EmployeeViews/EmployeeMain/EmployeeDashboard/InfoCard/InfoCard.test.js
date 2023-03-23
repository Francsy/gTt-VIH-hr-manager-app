import React from "react";
import { shallow } from "enzyme";
import InfoCard from "./InfoCard";

describe("InfoCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<InfoCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
