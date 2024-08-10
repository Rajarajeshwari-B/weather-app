const searchButton = document.getElementById('searchButton');
const cityInput = document.getElementById('cityInput');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');

searchButton.addEventListener('click', () => {
  const city = cityInput.value;
  getWeather(city);
});

function getWeather(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=433f19e2ac08e0351bb24c5d18e1d58e`)
    .then(response => response.json())
    .then(data => {
      cityName.textContent = `City: ${data.name}`;
      temperature.textContent = `Temperature: ${data.main.temp}°C`;
      description.textContent = `Description: ${data.weather[0].description}`;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;
    })
    .catch(error => console.error('Error fetching weather data:', error));
}

function updateDateTime() {
  const now = new Date();
  const dateOptions = { 
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  };
  const timeOptions = {
      hour: '2-digit', minute: '2-digit', second: '2-digit'
  };
  const dateString = now.toLocaleDateString('en-US', dateOptions);
  const timeString = now.toLocaleTimeString('en-US', timeOptions);
  document.getElementById('date').textContent = dateString;
  document.getElementById('time').textContent = timeString;
}

updateDateTime();
setInterval(updateDateTime, 1000);