function initMap() {
    var map = new google.maps.Map(document.getElementById('ed-map'), {
        zoom: 18,
        center: {lat: -22.8302945, lng: -43.3269271},
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false
    });
    var marker = new google.maps.Marker({
//        position: uluru,
        map: map,
        // Define the place with a location, and a query string.
        place: {
            location: {lat: -22.8293429, lng: -43.3255686},
            query: 'Estação Digital, Rio de Janeiro, Brasil'
        },
    });
}