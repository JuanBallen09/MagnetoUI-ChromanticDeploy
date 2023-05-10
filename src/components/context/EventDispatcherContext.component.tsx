import React, { createContext } from "react";
import { EventDispatcher } from "../../utils/eventDispatcher";

const eventDispatcher = new EventDispatcher();

export const EventDispatcherContext =
  createContext<EventDispatcher>(eventDispatcher);

export const EventDispatcherContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <EventDispatcherContext.Provider value={eventDispatcher}>
      {children}
    </EventDispatcherContext.Provider>
  );
};
