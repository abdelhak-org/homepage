import React from "react";
import { render } from "@testing-library/react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { UiProvider } from "@/context/ui/UiContext";
const AllTheProviders = ({ children }) => {
  return <DndProvider backend={HTML5Backend}>{children}</DndProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: UiProvider, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
