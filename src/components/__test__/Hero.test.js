import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../Hero";
import {MemoryRouter} from 'react-router-dom'
describe("Testing the Hero component", () => {
  test("Find the main header", () => {
    render(
        <Hero />, {wrapper: MemoryRouter}
    );
    const linkElement = screen.getByText(/Rick & Morty/i);
    expect(linkElement).toBeInTheDocument;
  });
  test("Description for hero is present", () => {
    render(<Hero/>,{wrapper: MemoryRouter})
    expect(screen.getByText(/science fiction sitcom/i)).toBeInTheDocument;
  })
  test("A character button exist", () => {
      render(<Hero/>, {wrapper: MemoryRouter})
      expect(screen.getByRole("button",{name: /CHARACTER/i})).toBeInTheDocument;
  })
  
  test("A location button exist", () => {
    render (<Hero/>, {wrapper: MemoryRouter})
    expect(screen.getByRole("button", {name: /Location/i})).toBeInTheDocument;
  })
})
