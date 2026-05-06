import { fireEvent, render, screen } from "@testing-library/react";
import Qualification from "./Qualification";

describe("Qualification", () => {
  test("shows the new experience by default and switches to certification content", () => {
    render(<Qualification />);

    expect(
      screen.getByRole("heading", { name: /associate application consultant/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/capgemini/i)).toBeInTheDocument();
    expect(screen.getByText(/feb 2026 - present/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("tab", { name: /certifications/i }));

    expect(
      screen.getByRole("heading", {
        name: /microsoft certified: azure fundamentals/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/credential id: f7e597dac5a25a42/i)
    ).toBeInTheDocument();
  });
});
