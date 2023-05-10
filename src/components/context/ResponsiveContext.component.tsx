import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { Dimension } from "../../utils/eventDispatcher";
import { ResponsiveManagement } from "../../utils/responsive/responsive.util";
import { EventDispatcherContext } from "./EventDispatcherContext.component";

const responsiveManagement = new ResponsiveManagement();

type ResponsiveContextProps = {
  children: React.ReactNode;
};

export const ResponsiveContext = createContext<{ dim: Dimension }>({
  dim: responsiveManagement.getDim(),
});

export const ResponsiveContextProvider: React.FC<ResponsiveContextProps> = ({
  children,
}) => {
  const eventDispatcher = useContext(EventDispatcherContext);

  const [dim, setDim] = useState(responsiveManagement.getDim());

  useEffect(() => {
    const unsuscribe = eventDispatcher.suscribe(
      "UPDATE_DIMENSION",
      ({ dim }) => {
        setDim(dim);
      }
    );
    responsiveManagement.run(eventDispatcher);
    return () => {
      unsuscribe();
    };
  }, [eventDispatcher]);

  return (
    <ResponsiveContext.Provider value={{ dim }}>
      {children}
    </ResponsiveContext.Provider>
  );
};
