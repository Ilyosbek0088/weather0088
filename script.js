function getWeather() {
    const apiKey = "571298107b41316be2b514c5808839ee";
    const city = document.getElementById("city-input").value || "Pompey";  // Default city if input is empty
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);  // Log the entire object to the console

            // Update HTML with the fetched weather data
            document.getElementById("city-name").textContent = data.name;
            document.getElementById("temperature").textContent = `${data.main.temp} °C`;
            document.getElementById("description").textContent = data.weather[0].description;
            document.getElementById("temp-min").textContent = `${data.main.temp_min} °C`;
            document.getElementById("temp-max").textContent = `${data.main.temp_max} °C`;

            // Display weather icon based on the main weather condition
            const weatherIconMap = {
                "Clear": "☀️",
                "Clouds": "☁️",
                "Rain": "🌧️",
                "Snow": "❄️",
                "Thunderstorm": "🌩️",
                "Drizzle": "🌦️",
                "Atmosphere": "🌫️"
            };
            document.getElementById("weather-icon").textContent = weatherIconMap[data.weather[0].main] || "🌈";
        })
        .catch(error => console.error("Fetch error:", error));
}


window.confirm('warning half of js code was made using ChatGPT')
    window.confirm('other part of the code was made using Keyboard')