class Storage {
  constructor() {
    this.defaultCity = 'Casablanca';
    this.defaultState = 'MA';
    this.city;
    this.state;
  }
  getLocationData() {
    if (localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }
    if (localStorage.getItem('state') === null) {
      this.state = this.defaultState;
    } else {
      this.state = localStorage.getItem('state');
    }
    return {
      city: this.city,
      state: this.state,
    };
  }
  setLocationData(city, state) {
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
  }
}
