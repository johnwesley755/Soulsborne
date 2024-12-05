import React, { createContext, useState } from "react";
import { getGigs } from "../services/gigService";

const GigContext = createContext();

export const GigProvider = ({ children }) => {
  const [gigs, setGigs] = useState(getGigs());

  return <GigContext.Provider value={{ gigs }}>{children}</GigContext.Provider>;
};

export default GigContext;
