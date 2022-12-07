// Add console.log to check to see if our code is working.
console.log("working");

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let map = L.map('mapid', {
    center: [40.7, -94.5],
    zoom: 3,
    layers: [streets]
});


//  Add a marker to the map for Los Angeles, California. ((14.4.1))
// //let marker = L.marker([34.0522, -118.2437]).addTo(map);

// let map = L.map('mapid').setView([34.0522, -118.2437], 14);


// // changing the marker into a circle using the circle() function ((^^))
// L.circle([34.0522, -118.2437], {
//     radius: 100
//  }).addTo(map);


// Adding a circle to the map, allowing for marker costumizations ((^^))
L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: '#ffffa1'
}).addTo(map);