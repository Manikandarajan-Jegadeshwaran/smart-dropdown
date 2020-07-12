import React from "react";
import { render, screen } from "@testing-library/react";
import SmartDropdownContainer from "./smart-drop-down-container";

describe("Layout.js test", () => {
  test("Layout component should render correctly", () => {
    render(<SmartDropdownContainer />);
    expect(screen.getByText("Connect API")).toBeInTheDocument();
    expect(screen.getByText('Show "Add New"')).toBeInTheDocument();
    expect(screen.getByText("Children")).toBeInTheDocument();
    expect(screen.getByText("Sample")).toBeInTheDocument();
    expect(screen.getByText("API Reference")).toBeInTheDocument();
  });
});
