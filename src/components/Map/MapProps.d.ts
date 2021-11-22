import { LatLngExpression } from 'leaflet'

export interface FeaturesProps {
  type: string
  geometry: {
    type: string
    coordinates: LatLngExpression[][]
  }
  properties: {
    geom: string
    population: number
    averageincome: number
    t01_nome_do_distrito: string
    t01_nome_do_municipio: string
  }
}

export interface MapProps {
  features: FeaturesProps
}
