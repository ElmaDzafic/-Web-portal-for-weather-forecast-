const appKey = "b3d36f810fc383d71d4e38c749548f68";

let searchButton = document.getElementById("search-btn");
let searchInput = document.getElementById("search-txt");
let cityName = document.getElementById("city-name");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temp");
let humidity = document.getElementById("humidity-div");

searchButton.addEventListener("click", findWeatherDetails);
searchInput.addEventListener("keyup", enterPressed);

function enterPressed(event) {
  if (event.key === "Enter") {
    findWeatherDetails();
  }
}

function findWeatherDetails() {
  if (searchInput.value === "") {
  
  
  }else {
    let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid="+appKey;
   httpRequestAsync(searchLink, theResponse);
  }
 }

function theResponse(response) {
  let jsonObject = JSON.parse(response);
  console.log(jsonObject)
  cityName.innerHTML = jsonObject.name;
  icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png"
  resultDescription=jsonObject.weather[0].description;
  description.innerText=resultDescription.charAt(0).toUpperCase()+ resultDescription.slice(1);
  temperature.innerHTML = "Temperatura: "+"</br>"+parseInt(jsonObject.main.temp - 273) + "°";
  humidity.innerHTML = "Vlažnost: " +"</br>"+ jsonObject.main.humidity + "%";
}

function httpRequestAsync(searchLink, theResponse)
{
 
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => { 
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            theResponse(httpRequest.responseText);
    }
    httpRequest.open("GET", searchLink, true); 
    httpRequest.send();
}