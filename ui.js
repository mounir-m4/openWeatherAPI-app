class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.windSpeed = document.getElementById('w-windSpeed');
    this.windDeg = document.getElementById('w-windDeg');
  }
  displayContent(weatherjs) {
    this.location.textContent = weatherjs.name;
    this.desc.textContent = weatherjs.weather[0].description;
    this.string.textContent = `${weatherjs.main.temp} C`;
    this.icon.setAttribute(
      'src',
      `http://openweathermap.org/img/wn/${weatherjs.weather[0].icon}@2x.png`
    );
    this.humidity.textContent = `Humidity: ${weatherjs.main.humidity}%`;
    this.feelsLike.textContent = `Feels Like: ${weatherjs.main.feels_like} C`;
    this.windSpeed.textContent = `Wind speed: ${weatherjs.wind.speed} km`;
    this.windDeg.textContent = `Wind Direction: ${weatherjs.wind.deg}`;
  }
}
