


// Initialize and add the google map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 51.528308, lng: -0.3817765 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}
