const apiKey = process.env.WEATHER_API_KEY;
const container = document.querySelector('.container');

function getWeather(location) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
    fetch(url, { mode: 'cors' })
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            const weather = data.current;
            const location = data.location;
            const html = `
            <div class="card">
                <div class="card-header">
                    <h1>${location.name}</h1>
                    <h3>${location.country}</h3>
                </div>
                <div class="card-body">
                    <h2>${weather.temp_c}°C</h2>
                    <img src="${weather.condition.icon}" alt="${weather.condition.text}">
                    <h3>${weather.condition.text}</h3>
                </div>
            </div>
            `;
            container.innerHTML = html;
        })
        .catch(function (error) {
            console.error('Error fetching data:', error);
        });
}

const searchButton = document.querySelector('#search-button');
const searchInput = document.querySelector('#search-input');

searchButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission
    getWeather(searchInput.value);
});
