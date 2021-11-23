// External
import {
  MapContainer,
  TileLayer,
  Popup,
  FeatureGroup,
  Polygon
} from 'react-leaflet'

// Utils
import { getColor } from '../../utils/getColor'
import { convertMoney } from '../../utils/formatMoney'
import { useMapCoordinates } from '../../hook/MapCoordinates'
import { FeaturesProps } from './MapProps'

// Envs
import {
  MAPBOX_API_KEY,
  MAPBOX_STYLEID,
  MAPBOX_USERID
} from '../../constants/env'

// Custom map
const CustomTileLayer = () => {
  return MAPBOX_API_KEY ? (
    <TileLayer
      attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  )
}

const Map = () => {
  const { data } = useMapCoordinates()

  return (
    <span data-testid="leaflet-map">
      <MapContainer
        center={[-51.905072, -23.45017]}
        zoom={6}
        style={{ height: '100%', width: '100%' }}
      >
        <CustomTileLayer />
        {data &&
          data?.features?.map((coord: FeaturesProps) => (
            <FeatureGroup key={coord.properties.geom}>
              <Polygon
                pathOptions={{ color: getColor(coord.properties.population) }}
                positions={coord.geometry.coordinates}
              >
                <Popup>
                  População total: {coord.properties.population} - Renda média:{' '}
                  {convertMoney(coord.properties.averageincome)}
                </Popup>
              </Polygon>
            </FeatureGroup>
          ))}
      </MapContainer>
    </span>
  )
}

export default Map
