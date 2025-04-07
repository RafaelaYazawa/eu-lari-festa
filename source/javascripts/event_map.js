export function initializeMap() {
	mapboxgl.accessToken =
		"pk.eyJ1IjoicmFmYXlhemF3YSIsImEiOiJjbTk2eG1tMmgwMWxoMm1xMnYwcmtzajE0In0.LRxPS3t9_3_4R9aQPGqkEg";

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
