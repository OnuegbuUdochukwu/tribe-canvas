import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders home page headline", () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );
    const headline = screen.getByText(
        /Discover the Soul of Nigeria Through Art/i
    );
    expect(headline).toBeInTheDocument();
});
