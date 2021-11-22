import { LatLngExpression } from 'leaflet';
import { useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  FeatureGroup,
} from 'react-leaflet';
import { useMapCoordinates } from '../../hook/MapCoordinates';

const Map = () => {
  const { data, setData } = useMapCoordinates();
  const [coordinates, setCoordinates] = useState<any>();
  const [locations, setLocations] = useState<any>();
  // console.log('Component Map funcionando context: ', data);

  // data?.features?.map((dt) => console.log(dt.geometry.coordinates));
  const dsasa: LatLngExpression[][] = data?.features?.map((dt) => {
    return dt.geometry.coordinates;
  });

  // data?.map((dt) => {
  //   setCoordinates(dt);
  //   console.log('Coordinates: ', coordinates);
  //   alert('Chegou dados aqui');
  // });

  // useEffect(() => {
  //   data?.features?.map((dt) => {
  //     setCoordinates(dt);
  //   });
  //   alert('Chegou dados aqui');
  // }, [data]);

  // locations?.geometry?.map((item: any) => setCoordinates(item.geometry));

  // console.log(coordinates);
  // console.log(locations);

  const center: LatLngExpression = [-51.934738, -23.411696];
  const limeOptions = { color: 'red' };
  const multiPolyline: LatLngExpression[][] = [
    [
      [-51.905072, -23.45017],
      [-51.90405, -23.448668],
      [-51.90326, -23.447504],
      [-51.902437, -23.446272],
      [-51.902091, -23.445831],
      [-51.901729, -23.445435],
      [-51.901564, -23.445314],
      [-51.895902, -23.450722],
      [-51.896132, -23.451195],
      [-51.896231, -23.451317],
      [-51.896362, -23.451438],
      [-51.896494, -23.45159],
      [-51.896626, -23.451682],
      [-51.896758, -23.451773],
      [-51.896856, -23.451925],
      [-51.896889, -23.452077],
      [-51.896922, -23.45226],
      [-51.896955, -23.452442],
      [-51.896955, -23.452594],
      [-51.897087, -23.452746],
      [-51.897218, -23.452868],
      [-51.897383, -23.45299],
      [-51.897515, -23.453081],
      [-51.897646, -23.453172],
      [-51.898434, -23.452595],
      [-51.898947, -23.452362],
      [-51.899622, -23.451526],
      [-51.899452, -23.451278],
      [-51.899911, -23.450928],
      [-51.900406, -23.45058],
      [-51.901658, -23.449646],
      [-51.902174, -23.449279],
      [-51.902944, -23.44873],
      [-51.90335, -23.449326],
      [-51.903692, -23.449837],
      [-51.904023, -23.450323],
      [-51.904248, -23.450662],
      [-51.905072, -23.45017],
    ],
    [
      [-51.980798, -23.390415],
      [-51.980504, -23.390324],
      [-51.980095, -23.390098],
      [-51.978134, -23.392417],
      [-51.975094, -23.396285],
      [-51.974693, -23.396327],
      [-51.974924, -23.396552],
      [-51.97511, -23.396769],
      [-51.975639, -23.397362],
      [-51.975809, -23.396947],
      [-51.976777, -23.395692],
      [-51.977696, -23.394491],
      [-51.977898, -23.394229],
      [-51.9779110570936, -23.394211954684],
      [-51.978651, -23.393246],
      [-51.980382, -23.391059],
      [-51.980798, -23.390415],
    ],
    [
      [-51.919535, -23.414551],
      [-51.919493, -23.414525],
      [-51.919435, -23.414409],
      [-51.918869, -23.413706],
      [-51.9188671709477, -23.41370353953],
      [-51.9181698580655, -23.4139951430989],
      [-51.9173596441572, -23.414041886209],
      [-51.9157625878958, -23.4136913128834],
      [-51.9150926033178, -23.4138159611769],
      [-51.9145876047967, -23.4140540319083],
      [-51.915063, -23.41478],
      [-51.915559, -23.415469],
      [-51.915843, -23.41593],
      [-51.916101, -23.416346],
      [-51.916652, -23.416082],
      [-51.917129, -23.415854],
      [-51.917119, -23.415825],
      [-51.917115, -23.415793],
      [-51.917123, -23.415749],
      [-51.917155, -23.4157],
      [-51.917203, -23.415669],
      [-51.917248, -23.415659],
      [-51.917302, -23.415545],
      [-51.917401, -23.415591],
      [-51.919535, -23.414551],
    ],
  ];

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {data &&
        data?.features?.map((coord, index) => (
          <FeatureGroup key={index}>
            <Polyline
              pathOptions={limeOptions}
              positions={coord.geometry.coordinates}
            >
              <Popup>
                {coord.properties.population} - {coord.properties.averageincome}
              </Popup>
            </Polyline>
          </FeatureGroup>
        ))}
    </MapContainer>
  );
};

export default Map;
