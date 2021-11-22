import React, { createContext, useContext, useState } from 'react';

export const mapCoordinatesContext = createContext<any>(null);

export function useMapCoordinates() {
  return useContext(mapCoordinatesContext);
}

export function MapCoordinates({ children }: any) {
  const [data, setData] = useState();

  const value = {
    data,
    setData,
  };

  return (
    <mapCoordinatesContext.Provider value={value}>
      {children}
    </mapCoordinatesContext.Provider>
  );
}
