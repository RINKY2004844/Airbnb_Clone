


let maapToken = mapToken;
maptilersdk.config.apiKey = maapToken;
const map = new maptilersdk.Map({
  container: 'map', // container's id or the HTML element in which the SDK will render the map
  style: maptilersdk.MapStyle.STREETS,
  center: [77.209,28.6139], // starting position [lng, lat]
  zoom: 14 // starting zoom
});
