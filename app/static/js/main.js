// Function to handle voice tour guide narration
function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}

// Initialize Google Map with popular tourist destinations in Akwa Ibom
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 5.058, lng: 7.947 }, // Coordinates for Akwa Ibom
        zoom: 9, // Slightly closer zoom to see multiple landmarks
    });

    // Define popular tourist destinations in Akwa Ibom
    const locations = [
        { name: 'Ibeno Beach', lat: 4.537, lng: 7.975 },
        { name: 'Amalgamation House', lat: 5.026, lng: 7.935 },
        { name: 'Godswill Akpabio International Stadium', lat: 5.006, lng: 7.925 },
        { name: 'Ibom Plaza', lat: 5.039, lng: 7.918 },
        { name: 'National Museum, Uyo', lat: 5.041, lng: 7.935 },
    ];

    // Add markers for each location on the map
    locations.forEach(location => {
        const marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.name,
        });

        // Info window to display the name of the location when clicked
        const infoWindow = new google.maps.InfoWindow({
            content: `<h3>${location.name}</h3>`,
        });

        // Show info window when marker is clicked
        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    });
}
