var map;
function initMap() {
   map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: -34.397, lng: 150.644}
  });
  var geocoder = new google.maps.Geocoder();

  var myLatLng = {lat: -34.397, lng: 150.644};

  var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Sydney'
        });


  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });
}

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });

      //Get lat and long
      var latitude = results[0].geometry.location.lat();
      var longitude = results[0].geometry.location.lng();
      document.getElementById("lat").innerHTML = "Latitude: " + latitude;
      document.getElementById("long").innerHTML = "Longitude: " + longitude;
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

  var curLat;
  var curLong;

    //Get current location
    var onSuccess = function(position) {
      curLat = position.coords.latitude;
      curLong = position.coords.longitude;
      };

    navigator.geolocation.getCurrentPosition(onSuccess);

    function showLocation() {
      document.getElementById("lat").innerHTML = "Latitude: " + curLat;
      document.getElementById("long").innerHTML = "Longitude: " + curLong;
      document.getElementById("address").value = curLat + "," +curLong;

      map.setCenter({lat: curLat, lng: curLong});

      var curLatLng = {lat: curLat, lng: curLong};

      var marker = new google.maps.Marker({
              position: curLatLng,
              map: map,
              title: 'curLocation'
            });
          }
    
