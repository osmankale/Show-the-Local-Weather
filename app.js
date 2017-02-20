document.getElementById("geo").onclick = function() {myFunction()};

function myFunction() {
  var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
         myObj = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = myObj.lat + ' / ' + myObj.lon;
    }
};
xmlhttp.open("GET", "http://ip-api.com/json", true);
xmlhttp.send();
}

