import React from "react";
import { shallow } from "enzyme";
import MensajeCard from "./MensajeCard";

describe("MensajeCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MensajeCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
