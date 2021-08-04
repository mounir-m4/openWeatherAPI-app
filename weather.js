class Weather {
  constructor(city, state) {
    // you should change api key to your (all you need is to sign up for openweather) or it won't work
    this.apiKey = '8a6394bb7656d2473a7b5271004ca15a';
    this.city = city;
    this.state = state;
  }
  //Fetch weath from openweather JS
  async getWeather() {
    const response = await fetch(
      `https:/api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=metric&appid=${this.apiKey}`
      //https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${yourKey}
    );
    const data = await response.json();
    return data;
  }
  // change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
