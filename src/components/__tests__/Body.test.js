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
    //with the help of getByTestId, we can query what we passed to data-testid in our component.
    const { getByTestId } = render(<Body title="Jay Rocks" />);
    expect(getByTestId("header")).toHaveTextContent("Jay Roc");

    //exact match
    expect(getByTestId("header")).toHaveTextContent(/^Jay Rocks$/);
  });

  test("check Counter initial value", () => {
    const { getByTestId } = render(<Body title="Jay Rocks" />);
    expect(getByTestId("counter")).toHaveTextContent("0");
  });

  test("check Counter value after a tap", () => {
    const { getByTestId } = render(<Body title="I Love Kavinie" />);
    const button = getByTestId("button");
    userEvent.click(button);
    expect(getByTestId("counter")).toHaveTextContent("1");
  });
});
