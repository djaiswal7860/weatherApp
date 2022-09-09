var image=document.querySelector("#image");
var backImage=document.querySelector("#backImage")
var temprature=document.querySelector("#temprature");
var description=document.querySelector("#description");
var place=document.querySelector("#place");
var feel=document.querySelector("#feel");
var humidity=document.querySelector("#humidity");

async function getWeatherData(city){
    var data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6d055e39ee237af35ca066f35474e9df`)
    var weatherData=await data.json();
    if(weatherData.cod==200){
    console.log(weatherData);
    console.log(weatherData.main.temp);
    temprature.innerHTML= `${Math.floor(weatherData.main.temp)}&#176c`;
    console.log(weatherData.weather[0].description);
    description.innerHTML=weatherData.weather[0].description
    console.log(weatherData.name);
   place.innerHTML=`<sub><span class="material-symbols-outlined">
   location_on
   </span></sub> ${weatherData.name} ${weatherData.sys.country}`;
   console.log(weatherData.main.feels_like);
    feel.innerHTML=`<sub><span class="material-symbols-outlined">
    device_thermostat
    </span></sub>${Math.floor(weatherData.main.feels_like)}&#176c <br> <sub>Feels_like</sub>`;
    console.log(weatherData.main.humidity);
    humidity.innerHTML=`<sub><span class="material-symbols-outlined">
    humidity_mid
    </span></sub>${weatherData.main.humidity} <br> <sub>Humidity</sub>`;
    if(weatherData.weather[0].description=="overcast clouds"){
        image.src="D:/New folder/html/svg image/overcast.png";
    } else if (weatherData.weather[0].description =="clear sky"){
        image.src="D:/New folder/html/svg image/clear_sky.png";
    } else if (weatherData.weather[0].description =="broken clouds"){
        image.src="D:/New folder/html/svg image/tornado.png";
    } else if (weatherData.weather[0].description =="heavy intensity rain"){
        image.src="D:/New folder/html/svg image/heavy intensity rain.png";
    } else if (weatherData.weather[0].description =="moderate rain"){
        image.src="D:/New folder/html/svg image/rain.png"; 
    } else if (weatherData.weather[0].description =="scattered clouds"){
        image.src="D:/New folder/html/svg image/cloudy.png"; 
    }else if(weatherData.weather[0].description == "haze"){
        image.src="D:/New folder/html/svg image/haze.png";
    }else if(weatherData.weather[0].description == "light rain"){
        image.src="D:/New folder/html/svg image/light-rain.png";
    }else if(weatherData.weather[0].description == "mist"){
        image.src="D:/New folder/html/svg image/mist.png";
    }else if(weatherData.weather[0].description == "fog"){
        image.src="D:/New folder/html/svg image/fog.png";
    }else if(weatherData.weather[0].description == "foggy"){
        image.src="D:/New folder/html/svg image/fog.png";
    }else if(weatherData.weather[0].description == "snow"){
        image.src="D:/New folder/html/svg image/snow.png";
    }else if(weatherData.weather[0].description == "rainbow"){
        image.src="D:/New folder/html/svg image/rainbow.png";
    }else if(weatherData.weather[0].description == "thunderstorm"){
        image.src="D:/New folder/html/svg image/thunderstorm.png";
    }else if(weatherData.weather[0].description == "storm"){
        image.src="D:/New folder/html/svg image/storm.png";
    }
    else if(weatherData.weather[0].description == "thunderstorm with light rain"){
        image.src="D:/New folder/html/svg image/thunderstorm.png";
    }
    else if(weatherData.weather[0].description == "thunderstorm with light rain"){
        image.src="D:/New folder/html/svg image/thunderstorm.png";
    }
    else if(weatherData.weather[0].description == "thunderstorm with rain"){
        image.src="D:/New folder/html/svg image/storm.png";
    }
     else{
        image.src="D:/New folder/html/svg image/cloudy.png";

     }
    
    }
    else{
    alert("city or country not found")
   
    
}
}
getWeatherData("mumbai");

function getData(){
    var city=document.querySelector("#city").value;
   
    
    getWeatherData(city);
}