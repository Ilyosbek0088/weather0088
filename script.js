
function getWeather(){
    const SearchCity = document.getElementById('city-input').value;
    const API_KEY = '571298107b41316be2b514c5808839ee';

    const City = document.getElementById('city-name');
    const Day = document.getElementById('day');
    const DateElement = document.getElementById('date');
    const Year = document.getElementById('year');
    const Icon = document.getElementById('weather-icon');
    const Temperature = document.getElementById('temperature');
    const Description = document.getElementById('description');
    const TempMin = document.getElementById('temp-min');
    const TempMax = document.getElementById('temp-max');


    if(SearchCity.trim().length !== 0){
        try {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${SearchCity}&appid=${API_KEY}`)
                .then(response => response.json())
                .then((data) => {
                    let date = new Date();
                    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                    
                    Day.innerHTML = days[date.getDay()];
                    DateElement.innerHTML = months[date.getMonth()] + " " + date.getDate();
                    Year.innerHTML = date.getFullYear();

                    City.innerHTML = data.name;
                    Temperature.innerHTML = `${(data.main.temp - 273.15).toFixed(2)} °C`;
                    TempMin.innerHTML = `${(data.main.temp_min - 273.15).toFixed(2)} °C`;
                    TempMax.innerHTML = `${(data.main.temp_max - 273.15).toFixed(2)} °C`;
                    Description.innerHTML = data.weather[0].description;

                    const weatherCondition = data.weather[0].main;
                    if(weatherCondition === 'Clouds'){
                        Icon.innerHTML = '☁️';
                        document.getElementById('sec').style.background =  "url('images/cloud.jpg')" 
                        document.getElementById('box').style.background =  "url('images/cloud.jpg')" 
 
                    }
                    else if(weatherCondition === 'Rain'){
                        Icon.innerHTML = '⛈️';
                        document.getElementById('sec').style.background =  "url('images/rain.jpg')" 
                        document.getElementById('box').style.background =  "url('images/rain.jpg')" 

                    }
                    else if(weatherCondition === 'Clear'){
                        Icon.innerHTML = '☀️';
                        document.getElementById('sec').style.background =  "url('images/i.webp') no-repeat  center center" 
                        document.getElementById('box').style.background =  "url('images/edit.gif') no-repeat  center center" 
                        ocument.getElementById('sec').style.backgroundSize = 'cover'
                    }
                    else if(weatherCondition === 'Snow'){
                        Icon.innerHTML = '❄️';
                        document.getElementById('sec').style.background =  "url('images/snow.jpg')" 
                        document.getElementById('box').style.background =  "url('images/blur-just.jpg') " 

                    }
                })
                .catch(error => console.error("Error fetching weather data:", error));
        } catch (error) {
            console.error("Error:", error);
        }
    } else {
        alert('Please enter a city');
    }
}



