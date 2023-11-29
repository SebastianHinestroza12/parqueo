// GlobalContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState(() => {
    const storedState = localStorage.getItem('appState');
    return storedState ? JSON.parse(storedState) : {
      user: null,
      vehicles: [],
      entries: [],
      parkingCells: [
        { id: 1, placaId: null },
        { id: 2, placaId: null },
        { id: 3, placaId: null },
        { id: 4, placaId: null },
        { id: 5, placaId: null },
      ],
    };
  });

  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(globalState));
  }, [globalState]);

  const updateGlobalState = (newState) => {
    setGlobalState((prevGlobalState) => ({
      ...prevGlobalState,
      ...newState,
    }));
  };

  return (
    <GlobalContext.Provider value={{ globalState, updateGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(GlobalContext);
};