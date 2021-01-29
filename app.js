'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


let seattle = {
  name: 'Seattle',
  minimumCustomerEachHour: 23,
  maximumCustomerEachHour: 65,
  averageCookiesSoldEachHour: 6.3,
  CookiesSoldPerHourArray: [],
  dailyStoreTotal: 0,
  randomCustomersPerHour: function () {
    console.log()
    return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour)
  },
  calcCookiesSoldPerHour: function () {

    for (let i = 0; i < hours.length; i++) {
      let hourlyCookieSale = Math.floor(this.averageCookiesSoldEachHour * (Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour));
      this.CookiesSoldPerHourArray.push(hourlyCookieSale);
      this.dailyStoreTotal = this.dailyStoreTotal + hourlyCookieSale;
      // console.log(this.dailyStoreTotal);
    }
  },
}
seattle.calcCookiesSoldPerHour();

let tokyo = {
  name: 'Tokyo',
  minimumCustomerEachHour: 3,
  maximumCustomerEachHour: 24,
  averageCookiesSoldEachHour: 1.2,
  CookiesSoldPerHourArray: [],
  dailyStoreTotal: 0,
  randomCustomersPerHour: function () {
    console.log()
    return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour)
  },
  calcCookiesSoldPerHour: function () {

    for (let i = 0; i < hours.length; i++) {
      let hourlyCookieSale = Math.floor(this.averageCookiesSoldEachHour * (Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour));
      this.CookiesSoldPerHourArray.push(hourlyCookieSale);
      this.dailyStoreTotal = this.dailyStoreTotal + hourlyCookieSale;
      // console.log(this.dailyStoreTotal);
    }
  },
}

tokyo.calcCookiesSoldPerHour();

let dubai = {
  name: 'Dubai',
  minimumCustomerEachHour: 11,
  maximumCustomerEachHour: 38,
  averageCookiesSoldEachHour: 3.7,
  CookiesSoldPerHourArray: [],
  dailyStoreTotal: 0,
  randomCustomersPerHour: function () {
    console.log()
    return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour)
  },
  calcCookiesSoldPerHour: function () {

    for (let i = 0; i < hours.length; i++) {
      let hourlyCookieSale = Math.floor(this.averageCookiesSoldEachHour * (Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour));
      this.CookiesSoldPerHourArray.push(hourlyCookieSale);
      this.dailyStoreTotal = this.dailyStoreTotal + hourlyCookieSale;
      // console.log(this.dailyStoreTotal);
    }
  },
}
dubai.calcCookiesSoldPerHour();

let paris = {
  name: 'Paris',
  minimumCustomerEachHour: 20,
  maximumCustomerEachHour: 38,
  averageCookiesSoldEachHour: 2.3,
  CookiesSoldPerHourArray: [],
  dailyStoreTotal: 0,
  randomCustomersPerHour: function () {
    console.log()
    return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour)
  },
  calcCookiesSoldPerHour: function () {

    for (let i = 0; i < hours.length; i++) {
      let hourlyCookieSale = Math.floor(this.averageCookiesSoldEachHour * (Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour));
      this.CookiesSoldPerHourArray.push(hourlyCookieSale);
      this.dailyStoreTotal = this.dailyStoreTotal + hourlyCookieSale;
      // console.log(this.dailyStoreTotal);
    }
  },
}
paris.calcCookiesSoldPerHour();

let lima = {
  name: 'Lima',
  minimumCustomerEachHour: 2,
  maximumCustomerEachHour: 16,
  averageCookiesSoldEachHour: 4.6,
  CookiesSoldPerHourArray: [],
  dailyStoreTotal: 0,
  randomCustomersPerHour: function () {
    console.log()
    return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour)
  },
  calcCookiesSoldPerHour: function () {

    for (let i = 0; i < hours.length; i++) {
      let hourlyCookieSale = Math.floor(this.averageCookiesSoldEachHour * (Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour));
      this.CookiesSoldPerHourArray.push(hourlyCookieSale);
      this.dailyStoreTotal = this.dailyStoreTotal + hourlyCookieSale;
      // console.log(this.dailyStoreTotal);
    }
  },
}
lima.calcCookiesSoldPerHour();

// console.log(lima.CookiesSoldPerHourArray);

// grabbing onto an html element, filling it with data, then appending that element to its parent
var resultsElement = document.getElementById('sales');
var ulElement = document.createElement('ul');
resultsElement.appendChild(ulElement);

for (var i = 0; i < lima.CookiesSoldPerHourArray.length; i++) {
  var liElement = document.createElement('li');
  liElement.textContent = lima.CookiesSoldPerHourArray[i];
  ulElement.appendChild(liElement);
}


