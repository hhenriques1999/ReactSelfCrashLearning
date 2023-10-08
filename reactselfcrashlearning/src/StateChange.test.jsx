import TestingStateChange from "./StateChange";
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

test("Toggle text visible", async () => {
    render(<TestingStateChange/>);
    await userEvent.click(screen.getByText(/toggle text/i));
    expect(screen.getByText(/text visible/i)).toBeInTheDocument();
})