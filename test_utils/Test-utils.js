import { render ,} from "@testing-library/react";

import { UiProvider } from "@/context/ui/UiContext";

const AllTheProviders = ({ children }) => {
  return ( <UiProvider>{children}</UiProvider> )
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything

export * from "@testing-library/react";

// override render method
export { customRender };
