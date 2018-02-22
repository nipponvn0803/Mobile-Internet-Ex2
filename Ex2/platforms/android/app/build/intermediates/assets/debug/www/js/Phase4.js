var map;
function initMap() {
   map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: -33.8688197, lng: 151.20929550000005}
  });
  var geocoder = new google.maps.Geocoder();

  var myLatLng = {lat: -33.8688197, lng: 151.20929550000005};

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
      document.getElementById("lat").value = latitude;
      document.getElementById("long").value = longitude;
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

function saveData() {
        var address = escape(document.getElementById('address').value);
        var note = document.getElementById('note').value;
        var lat = document.getElementById("lat").value;
        var long = document.getElementById("long").value;
        var url = 'connectinfo.php?address=' + address + '&note=' + note +
                   '&lat=' + lat + '&long=' + long;

        downloadUrl(url, function(data, responseCode) {

          if (responseCode == 200 && data.length <= 1) {
            infowindow.close();
            messagewindow.open(map, marker);
          }
        });
      }

      function downloadUrl(url, callback) {
        var request = window.ActiveXObject ?
            new ActiveXObject('Microsoft.XMLHTTP') :
            new XMLHttpRequest;

        request.onreadystatechange = function() {
          if (request.readyState == 4) {
            request.onreadystatechange = doNothing;
            callback(request.responseText, request.status);
          }
        };

        request.open('GET', url, true);
        request.send(null);
      }

      function doNothing () {
      }
