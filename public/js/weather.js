// Replace ./data.json with your JSON feed
fetch('https://api.weatherapi.com/v1/current.json?key=c1b05a1b075b466684d223227212010&q=Kiev&aqi=no').then(response => {
  return response.json();
}).then(data => {
  // Work with JSON data here
  $('.weather__h3').text("There are " + data.current.temp_c + "°C in Kyiv now, " + data.current.condition.text.toLowerCase() + ", feels like " + data.current.feelslike_c + "°C");
  
}).catch(err => {
  // Do something for an error here
});