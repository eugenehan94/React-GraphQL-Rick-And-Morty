import React from "react"
import {render, screen} from "@testing-library/react"
import Footer from "../Footer"

test("This is the end text present", () => {
    render(<Footer/>)
    expect(screen.getByText(/this is the end/i)).toBeInTheDocument;
})

test("View other project text present", () => {
    render(<Footer/>)
    expect(screen.getByText(/view more of my other projects/i)).toBeInTheDocument;
})