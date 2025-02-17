import { createContext, useRef } from "react";

export const RefContext = createContext();

export const RefProvider = ({ children }) => {
  const featureRef = useRef(null);
  const pricingRef = useRef(null);
  const contactRef = useRef(null);
  const suitsRef = useRef(null);

  return (
    <RefContext.Provider value={{ featureRef, pricingRef, contactRef, suitsRef }}>
      {children}
    </RefContext.Provider>
  );
};
