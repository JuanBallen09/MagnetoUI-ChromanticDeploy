import React, { ReactNode } from "react";
import { EventDispatcherContextProvider } from "./EventDispatcherContext.component";
import { ResponsiveContextProvider } from "./ResponsiveContext.component";

type ContextAppProviderProps = {
  children: ReactNode;
};

export const ContextAppProvider: React.FC<ContextAppProviderProps> = ({
  children,
}) => {
  return (
    <EventDispatcherContextProvider>
      <ResponsiveContextProvider>{children}</ResponsiveContextProvider>
    </EventDispatcherContextProvider>
  );
};

export const withContextAppProvider = <T extends Record<string, unknown>>(
  Component: React.ComponentType<T>
): React.FC<T> => {
  const WithContextAppProvider: React.FC<T> = (props) => (
    <ContextAppProvider>
      <Component {...props} />
    </ContextAppProvider>
  );
  return WithContextAppProvider;
};
