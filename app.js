// Initialisation de la carte et définition de sa vue initiale
var map = L.map('map').setView([48.8566, 2.3522], 13);

// Chargement et affichage des tuiles OpenStreetMap sur la carte
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Création d'un groupe de marqueurs pour le clustering
var markers = L.markerClusterGroup();

// Exemple de données client, représentant les coordonnées et un nom
var clientData = [
    { lat: 48.8584, lng: 2.2945, name: 'Client 1' },
    { lat: 48.8601, lng: 2.3449, name: 'Client 2' },
    // Ajoutez autant d'objets client que nécessaire ici
];

// Ajout de marqueurs à la carte pour chaque client
clientData.forEach(function(client) {
    var marker = L.marker([client.lat, client.lng])
        .bindPopup(client.name); // Le Popup s'affiche avec le nom du client quand on clique sur le marqueur
    markers.addLayer(marker);
});

// Ajout du groupe de marqueurs à la carte
map.addLayer(markers);
