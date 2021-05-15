import About from "./About";
import React from "react";
import { render } from "@testing-library/react";

describe("Check About page load", () => {
  test("check About page has loaded", async () => {
    const { getByText } = render(<About />);
    expect(getByText(/This is an about page/)).toBeInTheDocument();
  });
});
