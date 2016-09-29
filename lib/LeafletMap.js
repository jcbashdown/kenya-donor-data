import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

import L from 'leaflet';
L.Icon.Default.imagePath = 'public/leaflet/images/';

const position = [-0.4, 37.8];
const attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
const tiles = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const LeafletMap = (
  <Map center={position} zoom={6}>
    <TileLayer
      url={tiles}
      attribution={attribution}
    />
  </Map>
);

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import donorDataReducer from './redux/reducers';
let store = createStore(donorDataReducer);

const LeafletMapContainer = (
  <Provider store={store}>
    {LeafletMap}
  </Provider>
);   

export default LeafletMapContainer;
