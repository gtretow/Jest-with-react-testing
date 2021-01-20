import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { addPost as addPostMock } from "./api";
import Posts from "./post";

/* Let’s test the post creation feature. To do so, we need to:

    Mock the API to make sure a post creation doesn’t fail.
    Fill in the tile.
    Fill in the content of the post.
    Click the Post button.
 */

jest.mock("./api");
describe("Posts", () => {
  test("adds a post", async () => {
    addPostMock.mockImplementation((post) =>
      Promise.resolve({ status: 200, data: { ...post, id: 1 } })
    );
    render(<Posts />);
    const title = screen.getByPlaceholderText(/title/i);
    const content = screen.getByPlaceholderText(/post/i);
    const button = screen.getByText(/post/i);
    const postTitle = "This is a post";
    const postContent = "This is the content of my post";

    fireEvent.change(title, { target: { value: postTitle } });
    fireEvent.change(content, { target: { value: postContent } });
    fireEvent.click(button);

    await screen.findByText(postTitle);
    screen.getByText(postContent);
  });
});

/* 
describe("Posts", () => {
  test("adds a post", async () => {
    addPostMock.mockImplementation((post) =>
      Promise.resolve({ status: 200, data: { ...post, id: 1 } })
    );
    render(<Posts />);
    const title = screen.getByPlaceholderText(/title/i);
    const content = screen.getByPlaceholderText(/post/i);
    const button = screen.getByText(/post/i);
    const postTitle = "This is a post";
    const postContent = "This is the content of my post";

    fireEvent.change(title, { target: { value: postTitle } });
    fireEvent.change(content, { target: { value: postContent } });
    fireEvent.click(button);

    debug();
    // Oops, this will fail Falha pois a ação de Post é ASYNC então o Post está sendo executado e ainda não possui essas infos
    expect(screen.queryByText(postTitle)).toBeInTheDocument();
    expect(screen.queryByText(postContent)).toBeInTheDocument();
  });
});
 */

/* There is also another way of testing asynchronous things with findBy* queries, which is just a combination of getBy* queries and waitFor: */

describe("Posts", () => {
  test("adds a post", async () => {
    // ...
    expect(button).toHaveTextContent("Posting");
    expect(button).toBeDisabled();
    await screen.findByText(postTitle);
    screen.getByText(postContent);
  });
});
