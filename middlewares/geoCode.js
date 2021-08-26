let geoCode = {
    reverseGeocode: function(latitude, longitude) {
        var api_key = '767c66c4cda2453096a942e07117401f';

        var api_url = 'https://api.opencagedata.com/geocode/v1/json'

        var request_url = api_url
            + '?'
            + 'key=' + api_key
            + '&q=' + encodeURIComponent(latitude + ',' + longitude)
            + '&pretty=1'
            + '&no_annotations=1';
        var request = new XMLHttpRequest();
        request.open('GET', request_url, true);

        request.onload = function() {
            if (request.status === 200){ 
            // Success!
            var data = JSON.parse(request.responseText);
            // alert(data.results[0].formatted); // print the location
            console.log(data.results[0].components.state)
            // localStorage.setItem("location", data.results[0].components.state)
            return data.results[0].components.state
            } else if (request.status <= 500){ 
            // We reached our target server, but it returned an error
                                
            console.log("unable to geocode! Response code: " + request.status);
            var data = JSON.parse(request.responseText);
            console.log('error msg: ' + data.status.message);
            } else {
            console.log("server error");
            }
        };

        request.onerror = function() {
            // There was a connection error of some sort
            console.log("unable to connect to server");        
        };
        request.send();  // make the request
    },
    getLocation: function(){
        function success (data){
            geoCode.reverseGeocode(data.coords.latitude, data.coords.longitude)
        }
        navigator.geolocation.getCurrentPosition(success, console.error)
    }
}

// geoCode.getLocation();

module.exports = geoCode