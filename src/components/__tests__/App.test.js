import { render } from "@testing-library/react";
import App from "../../App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Aehoo/i);
  expect(linkElement).toBeInTheDocument();
});


//fireEvent no RTL seria o Simulate do Jest
//screen seria expect