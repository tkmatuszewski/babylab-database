import React, { useState, createContext } from "react";

export const MainBgTheme = React.createContext("light");


export const MainBgThemeProvider = (props) => {
  const theme = false;
  return (
    <MainBgTheme.Provider value={theme}>{props.children}</MainBgTheme.Provider>
  );
};
