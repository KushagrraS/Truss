"use client";

import { createContext, useState } from "react";

export const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const [selectedBrand, setSelectedBrand] = useState([]);

  const value = {
    selectedBrand,
    setSelectedBrand,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
