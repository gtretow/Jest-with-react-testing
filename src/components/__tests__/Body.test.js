import React from "react";
import Body from "../Body";
import { getByText, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("This suit is to test the Body component", () => {
  test("Snapshot of Body", () => {
    const { asFragment } = render(<Body title="hello world" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("finding title", () => {
    //getByText is used to check whether the string exists in our DOM.
    const { getByText } = render(<Body title="Jay Rocks" />);
    expect(getByText("Jay Rocks")).toBeInTheDocument("Jay Rocks");
  });

  test("finding title with TestId", () => {
    const { getByTestId } = render(<Body title="Jay Rocks" />);
    expect(getByTestId("header")).toHaveTextContent("Jay Roc");

    //exact match
    expect(getByTestId("header")).toHaveTextContent(/^Jay Rocks$/);
  });
});
