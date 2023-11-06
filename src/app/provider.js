"use client";

import AppContextProvider from "utils/AppContextProvider";

export function Provider({ children }) {
  return <AppContextProvider>{children}</AppContextProvider>;
}
