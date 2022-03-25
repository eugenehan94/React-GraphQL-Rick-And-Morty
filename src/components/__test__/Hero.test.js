import React from "react";
// import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import Hero from "../Hero";
// import { Router } from "react-router-dom";
import {MemoryRouter} from 'react-router-dom'
test("Find the main header", () => {
//   const history = createMemoryHistory();
  render(
    // <Router history={history}>
      <Hero />, {wrapper: MemoryRouter}
    // </Router>
  );
  const linkElement = screen.getByText(/Rick & Morty/i);
  expect(linkElement).toBeInTheDocument;
});

test("A character button exist", () => {
    render(<Hero/>, {wrapper: MemoryRouter})
    expect(screen.getByRole("button",{name: /CHARACTER/i})).toBeInTheDocument;
})