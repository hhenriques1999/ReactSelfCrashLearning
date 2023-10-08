    import TestingStateChange from "./StateChange";
    import { render, screen } from '@testing-library/react';

    test("Testing page load", () => {
        render(<TestingStateChange />);
        expect(screen.getByText(/page loaded/i)).toBeInTheDocument();
    });