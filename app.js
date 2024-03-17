let myMap = L.map("map").setView([38, -97], 4);

// Base, Satellite, Aerial, and Hybrid layers
let baseLayer = L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
  {
    attribution: "© OpenStreetMap contributors © CARTO",
    maxZoom: 20,
  }
).addTo(myMap);

let satellite = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
  {
    attribution: "© Satellite provider",
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
    maxZoom: 20,
  }
);

let aerial = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© Aerial provider",
  maxZoom: 20,
});

let hybrid = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",
  {
    attribution: "© Map data: contributors, provider",
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
    maxZoom: 20,
  }
);

// Adding layer control
L.control
  .layers(
    {
      Light: baseLayer,
      Satellite: satellite,
      Aerial: aerial,
      Hybrid: hybrid,
    },
    {}
  )
  .addTo(myMap);

// Initialize an empty layer group for representative markers
let repMarkers = L.layerGroup().addTo(myMap);

// Corrected representatives data to support multiple entries
const repsData = [
  {
    name: "Caroline Gip-Motley",
    phone: "302-542-9956",
    email: "jcat5050@hotmail.com",
    image: "path-to-sfo-rep-image.jpg",
    coords: [39.668564, -75.586189],
  },
  {
    name: "Linda Lester",
    phone: "123-456-7890",
    email: "kmotley09@gmail.com",
    image: "path-to-sfo-rep-image.jpg",
    coords: [40.5068, -74.2654],
  },
  // Add more representatives as needed
  {
    name: "Caroline Gip- Motley",
    phone: "302-542-9956",
    email: "kmotley09gmail.com",
    image: "path-to-sfo-rep-image.jpg",
    coords: [26.1224, -80.1373],
  },
  {
    name: "Caroline Gip- Motley",
    phone: "302-542-9956",
    email: "kmotley09@gmail",
    image: "path-to-sfo-rep-image.jpg",
    coords: [33.7488, -84.3877],
  },
];

// Function to create popup content without hiding information
function createPopupContent(rep) {
  return `
    <div>
      <img src="${rep.image}" alt="Rep Image" style="width:100px;"><br>
      <strong>${rep.name}</strong><br>
      <a href="tel:${rep.phone}">
        <span class="icon-phone"></span> ${rep.phone}
      </a><br>
      <a href="mailto:${rep.email}">
        <span class="icon-email"></span> ${rep.email}
      </a>
    </div>
  `;
}

// Adding markers for each representative
repsData.forEach((rep) => {
  let marker = L.marker(rep.coords).bindPopup(createPopupContent(rep));
  repMarkers.addLayer(marker); // Add marker to the layer group
});

// Toggle switch functionality remains as provided
