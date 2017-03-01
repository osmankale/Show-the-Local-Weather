$(document).ready(function() {
 var url = 'api.openweathermap.org/data/2.5/weather?';
  var key = 'affd2555edfbfdbd2e7348555a78b729';
  
  
  function getWeather() {   navigator.geolocation.getCurrentPosition(function location (pos){
      var lat = pos.coords.latitude;
      var lon = pos.coords.longitude; 
     
       $.getJSON(url + 'lat=' + lat + '&lon=' + lon + '&appid=' + key, function(weather){
      document.getElementById('city').innerHTML = weather.name;
     });  
      
    })  
}
  getWeather();
  
});

