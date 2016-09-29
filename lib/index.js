import L from 'leaflet';

L.Icon.Default.imagePath = 'public/leaflet/images/';

var map = L.map('map');
map.setView([-0.4, 37.8], 6);

var attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
 
var tiles = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
 
L.tileLayer(tiles, {
    maxZoom: 18,
    attribution: attribution
}).addTo(map);
