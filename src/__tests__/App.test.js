import { getByAltText, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", ()=>{
    render(<App/>)

    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
    })

    expect(topLevelHeading).toBeInTheDocument()
})
test("renders an image tag with alt text", ()=>{
    render(<App/>)

    const image = screen.getByRole("img")

    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute("alt")
})
test("displays a second-level heading with the text `About Me`", ()=>{
    render(<App/>)

    const secondLevelHeading = screen.getByRole("heading", {
        name: /about me/i,
        exact: false,
        level: 2,
    })
})
test("displays a paragraph for your biography", ()=>{
    render(<App/>)

    const biography = screen.getByText(/biography/)

    expect(biography).toBeInTheDocument()
})
test("displays link to github and linkedin", ()=>{
    render(<App/>)

    const githubLink = screen.getByRole("link", {
        name: /github/i
    })
    const linkedInLink = screen.getByRole("link", {
        name: /linkedin/i,

    })

    expect(githubLink).toHaveAttribute("href")
    expect(linkedInLink).toHaveAttribute("href")
    
})