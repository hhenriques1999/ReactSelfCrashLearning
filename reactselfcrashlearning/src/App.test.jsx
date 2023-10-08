import { render, screen } from "@testing-library/react";
import App from "./App";

test("Render main app success", () => {
    render(<App/>);
    const element = screen.getByText(/hello, world/i);
    expect(element).toBeInTheDocument();
});