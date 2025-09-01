import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders welcome message on home page", () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );
    const welcomeElement = screen.getByText(/Welcome to Tribe Canvas/i);
    expect(welcomeElement).toBeInTheDocument();
});
