const API_KEY = "6083d7921c6c45599c4165553251602"; // Replace with your WeatherAPI.com API key

// DOM Elements
const cityInput = document.getElementById('city-input');
const weatherCard = document.getElementById('weather-card');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temp');
const weatherDescription = document.getElementById('weather-description');
const feelsLike = document.getElementById('feels-like');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const errorMessage = document.getElementById('error-message');
const loading = document.getElementById('loading');

// Event Listeners
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getWeather();
    }
});

function getWeather() {
    const city = cityInput.value.trim();
    
    if (!city) {
        showError('Please enter a city name');
        return;
    }

    showLoading();
    hideError();
    hideWeatherCard();

    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                throw new Error(data.error.message);
            }
            updateWeatherUI(data);
        })
        .catch(error => {
            showError(error.message || 'Failed to fetch weather data');
        })
        .finally(() => {
            hideLoading();
        });
}

function updateWeatherUI(data) {
    cityName.textContent = `${data.location.name}, ${data.location.country}`;
    temperature.textContent = Math.round(data.current.temp_c);
    weatherDescription.textContent = data.current.condition.text;
    feelsLike.textContent = `${Math.round(data.current.feelslike_c)}°C`;
    humidity.textContent = `${data.current.humidity}%`;
    windSpeed.textContent = `${Math.round(data.current.wind_kph)} km/h`;
    
    showWeatherCard();
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
}

function hideError() {
    errorMessage.classList.add('hidden');
}

function showWeatherCard() {
    weatherCard.classList.remove('hidden');
}

function hideWeatherCard() {
    weatherCard.classList.add('hidden');
}

function showLoading() {
    loading.classList.remove('hidden');
}

function hideLoading() {
    loading.classList.add('hidden');
}
