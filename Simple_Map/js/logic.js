// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level. ((14.2.4))
let map = L.map('mapid').setView([40.7, -94.5], 4);

// // an alternate ti using the setView() ((14.2.4))
// // Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });
// ^^^ the method above is useful when we need to add multple tile lays, background images for our map

// We create the tile layer that will be the background of our map ((14.2.4)).
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

