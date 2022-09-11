var image=document.querySelector("#image");
var backImage=document.querySelector("#backImage")
var temprature=document.querySelector("#temprature");
var description=document.querySelector("#description");
var place=document.querySelector("#place");
var feel=document.querySelector("#feel");
var humidity=document.querySelector("#humidity");
var minMax=document.querySelector("#minMax");

async function getWeatherData(city){
    var data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6d055e39ee237af35ca066f35474e9df`)
    var weatherData=await data.json();
    if(weatherData.cod==200){
    console.log(weatherData);
    console.log(weatherData.main.temp);
    temprature.innerHTML= `${Math.floor(weatherData.main.temp)}&#176C`;
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
    console.log(weatherData.main.temp_min,weatherData.main.temp_max);
    minMax.innerHTML=`min:${weatherData.main.temp_min}&#176C     max:${weatherData.main.temp_max}&#176C`;
    console.log(weatherData.main.humidity);
    humidity.innerHTML=`<sub><span class="material-symbols-outlined">
    humidity_mid
    </span></sub>${weatherData.main.humidity} <br> <sub>Humidity</sub>`;
    if(weatherData.weather[0].description=="overcast clouds"){
        image.src="svg image/overcast.png";
        document.body.style.backgroundImage="url('weatherImg/scatteredCloud.jpg')";
    } else if (weatherData.weather[0].description =="clear sky"){
        image.src="svg image/clear_sky.png";
        document.body.style.backgroundImage="url('weatherImg/clearsky.jpg')";
    } else if (weatherData.weather[0].description =="broken clouds"){
        image.src="svg image/tornado.png";
        document.body.style.backgroundImage="url('weatherImg/tornado.jpg')";
    } else if (weatherData.weather[0].description =="heavy intensity rain"){
        image.src="svg image/heavy intensity rain.png";
        document.body.style.backgroundImage="url('weatherImg/heavy intensity rain.jpg')"
    } else if (weatherData.weather[0].description =="moderate rain"){
        image.src="svg image/rain.png";
        document.body.style.backgroundImage="url('weatherImg/rain.jpg')"; 
    } else if (weatherData.weather[0].description =="scattered clouds"){
        image.src="svg image/cloudy.png"; 
        document.body.style.backgroundImage="url('weatherImg/cloud.jpg')";
    }else if(weatherData.weather[0].description == "haze"){
        image.src="svg image/haze.png";
        document.body.style.backgroundImage="url('weatherImg/haze.jpg')";
    }else if(weatherData.weather[0].description == "light rain"){
        image.src="svg image/light-rain.png";
        document.body.style.backgroundImage="url('weatherImg/lightrain.jpg')";;
    }else if(weatherData.weather[0].description == "mist"){
        image.src="svg image/mist.png";
        document.body.style.backgroundImage="url('weatherImg/mist.jpg')";
    }else if(weatherData.weather[0].description == "fog"){
        image.src="svg image/fog.png";
        document.body.style.backgroundImage="url('weatherImg/fog.jpg')";
    }else if(weatherData.weather[0].description == "foggy"){
        image.src="svg image/fog.png";
        document.body.style.backgroundImage="url('weatherImg/foggy.jpg')";
    }else if(weatherData.weather[0].description == "snow"){
        image.src="svg image/snow.png";
        document.body.style.backgroundImage="url('weatherImg/heavysnow.jpg')";
    }else if(weatherData.weather[0].description == "rainbow"){
        image.src="svg image/rainbow.png";
        document.body.style.backgroundImage="url('weatherImg/rainbow.jpg')";
    }else if(weatherData.weather[0].description == "thunderstorm"){
        image.src="svg image/thunderstorm.png";
        document.body.style.backgroundImage="url('weatherImg/thunder.jpg')";
    }else if(weatherData.weather[0].description == "storm"){
        image.src="svg image/storm.png";
        document.body.style.backgroundImage="url('weatherImg/storm.jpg')";
    }
    else if(weatherData.weather[0].description == "thunderstorm with light rain"){
        image.src="svg image/thunderstorm.png";
        document.body.style.backgroundImage="url('weatherImg/1KL4.gif')"
    }
    else if(weatherData.weather[0].description == "thunderstorm with rain"){
        image.src="svg image/storm.png";
        document.body.style.backgroundImage="url('weatherImg/1KL4.gif')"
    }
     else{
        image.src="svg image/cloudy.png";
        document.body.style.backgroundImage="url('weatherImg/cloudy.jpg')";

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