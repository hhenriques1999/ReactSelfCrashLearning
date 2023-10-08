import TestingStateChange from "./StateChange";
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

test("Toggle text visible", async () => {
    render(<TestingStateChange/>);
    let element = screen.getByText(/toggle button disabled/i);
    await userEvent.click(element);
    expect(element).toBeDisabled();
})