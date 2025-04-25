require('dotenv').config(); 

console.log(mapboxAccessToken); /

export function initializeMap() {
  const mapboxAccessToken = process.env.MAPBOX_ACCESS_TOKEN;

  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [137.17083, 35.08444],
    zoom: 15,
  });

  const marker1 = new mapboxgl.Marker()
    .setLngLat([137.17083, 35.08444])
    .addTo(map);
}
