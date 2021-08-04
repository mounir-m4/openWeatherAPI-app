// init Storage
const storage = new Storage();
// get saved location data
const weatherLocation = storage.getLocationData();
// init weather
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// init ui
const ui = new UI();
// get weather function
const getWeather = () => {
  weather
    .getWeather()
    .then(result => {
      ui.displayContent(result);
    })
    .catch(err => console.log(err));
};
// change location event
document.getElementById('w-change-btn').addEventListener('click', () => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // Change location
  weather.changeLocation(city, state);

  // Set location in LS
  storage.setLocationData(city, state);

  getWeather();
  //close model
  $('#locationModel').modal('hide');
});
// display weather as soon as the DOM is loaded
document.addEventListener('DOMContentLoaded', getWeather);
