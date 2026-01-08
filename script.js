/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/


const url = 'https://openweather43.p.rapidapi.com/weather?appid=da0f9c8d90bde7e619c3ec47766a42f4&q=chicago&units=standard';






    /**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

// API_KEY for maps api

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  //HINT: Use template literals to create a url with input and an API key

  const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '00b58b644dmsh7d9ac5e64deb7a8p1d8156jsnd4cfffb0a1bc',
		'x-rapidapi-host': 'openweather43.p.rapidapi.com'
	}
};

  return fetch(`https://openweather43.p.rapidapi.com/weather?
    appid=da0f9c8d90bde7e619c3ec47766a42f4&q=${city}&units=standard`, options)
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.error(err));
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async() => {
  const city = document.getElementById('city-input').value;
  console.log(city)
  const data = await getWeatherData(city)
  showWeatherData(data)
  // CODE GOES HERE

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
    console.log(weatherData, 'cookie')
    console.log(weatherData.main.temp)
  document.getElementById('temp').innerText = weatherData.main.temp
  document.getElementById('city-name').innerText = weatherData.name
  document.getElementById('weather-type').innerText = 
  weatherData.weather[0].main
  document.getElementById('min-temp').innerText = 
  weatherData.main.temp_min

  document.getElementById('max-temp').innerText = 
  weatherData.main.temp_max
  
}

