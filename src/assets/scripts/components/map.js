'use strict';

const $ = window.$ || window.jQuery;
const google = window.google;

function initMap ($el) {
    var $markers = $el.find('.map__pins-holder__pin');
    var $map = $el.find('.map__holder');

    var lat = parseFloat($el.data('lat')) || 0;
    var lng = parseFloat($el.data('lng')) || 0;
    var zoom = parseFloat($el.data('zoom')) || 12;

    var map = new google.maps.Map($map[0], {
        zoom: zoom,
        center: new google.maps.LatLng(lat, lng),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    map.markers = [];
    $markers.each(function () {
        addMarker($(this), map);
    });

    return map;
}

function addMarker ($marker, map) {
    var latlng = new google.maps.LatLng($marker.attr('data-lat'), $marker.attr('data-lng'));
    var marker = new google.maps.Marker({
        position: latlng,
        map: map
    });

    map.markers.push(marker);

    if ($marker.html()) {
        var infowindow = new google.maps.InfoWindow({
            content: $marker.html()
        });

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });
    }
}

$(document).ready(function () {
    $('section.map').each(function () {
        initMap($(this));
    });
});
