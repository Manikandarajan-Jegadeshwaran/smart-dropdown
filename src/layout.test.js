import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "./layout";

describe("Layout.js test", () => {
  test("Layout component should render correctly", () => {
    render(<Layout />);
    expect(screen.getByText("Smart Drop Down")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
