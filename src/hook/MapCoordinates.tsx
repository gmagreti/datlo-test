import React, { createContext, useContext, useState } from 'react'

// Props
import { MapProps } from '../components/Map/MapProps'

export const mapCoordinatesContext = createContext<any>(null)

export function useMapCoordinates() {
  return useContext(mapCoordinatesContext)
}

export function MapCoordinates({ children }: any) {
  const [data, setData] = useState<MapProps[]>()
  const [loading, setLoading] = useState(false)

  const value = {
    data,
    setData,
    loading,
    setLoading
  }

  return (
    <mapCoordinatesContext.Provider value={value}>
      {children}
    </mapCoordinatesContext.Provider>
  )
}
