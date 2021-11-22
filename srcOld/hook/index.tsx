import React from 'react';

import { MapCoordinates } from './MapCoordinates';

const AppProvider: React.FC = ({ children }) => {
  return <MapCoordinates>{children}</MapCoordinates>;
};

export default AppProvider;
