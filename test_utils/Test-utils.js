import { render } from "@testing-library/react";

import { UiProvider } from "@/context/ui/UiContext";
import { DataContextProvider } from "@/context/data/DataContext";
const AllTheProviders = ({ children }) => {
  return (
    <DataContextProvider>
      <UiProvider>{children}</UiProvider>
    </DataContextProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything

export * from "@testing-library/react";

// override render method
export { customRender };
