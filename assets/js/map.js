// Coordonées de Limoges
let limoges = { "lat": 45.836, "lon": 1.264 };

// Créer la map Leaflet
let map = L.map('map').setView([limoges.lat, limoges.lon], 13);

// Ajout des tuiles OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 5,
    maxZoom: 20,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Ajout d'un marqueur bougeable pour Limoges
let marqueur = L.marker([limoges.lat, limoges.lon], { draggable: false }).addTo(map);

// Création d'un popup pour Limoges
marqueur.bindPopup("Vous êtes à Limoges").openPopup();