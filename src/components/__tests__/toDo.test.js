import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import Todos from "../toDo";

test("adds a new to-do", () => {
  render(<Todos />);
  const input = screen.getByPlaceholderText(/add something/i);
  const todo = "Read Master React Testing";
  screen.getByText("No to-dos!");
  
  fireEvent.change(input, { target: { value: todo } });
  fireEvent.keyDown(input, { key: "Enter" });

  screen.getByText(todo);

  //sem uso do jest-dom
/*   expect(input.value).toBe(""); */

//com jest-dom - expressões mais claras de se entender
expect(input).toHaveValue("");

});
