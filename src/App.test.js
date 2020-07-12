import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App.js test", () => {
  test("App component should render correctly", () => {
    render(<App />);
    expect(screen.getByText("Smart Drop Down")).toBeInTheDocument();
  });
});
