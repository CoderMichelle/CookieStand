'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let cookieTable = document.getElementById('cookie-table')
cookieTable.textContent = 'this is my table';
let resultsElement = document.createElement('div')
cookieTable.appendChild(resultsElement);

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

console.log(seattle.CookiesSoldPerHourArray);

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

console.log(tokyo.CookiesSoldPerHourArray);

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

console.log(dubai.CookiesSoldPerHourArray);

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

console.log(paris.CookiesSoldPerHourArray);

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

console.log(lima.CookiesSoldPerHourArray);
let storesArr = [seattle, tokyo, dubai, paris, lima];

// grabbing onto an html element, filling it with data, then appending that element to its parent

for (var j = 0; j < storesArr.length; j++) {
  var ulElement = document.createElement('ul');
  resultsElement.appendChild(ulElement);

  var liElement = document.createElement('li');
  liElement.textContent = storesArr[j].name;
  ulElement.appendChild(liElement);

  for (var i = 0; i < storesArr[j].CookiesSoldPerHourArray.length; i++) {
    var liElement = document.createElement('li');
    liElement.textContent = `${hours[i]}: ${storesArr[j].CookiesSoldPerHourArray[i]} cookies`;
    ulElement.appendChild(liElement);

  }
  var liElement = document.createElement('li');
  liElement.textContent = `Total: ${storesArr[j].dailyStoreTotal} cookies`;
  ulElement.appendChild(liElement);

}


//constructor Function:

function cookieStand(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.openHours = hoursOfOperation;
  this.totalCookiesPerDay = 0;
  this.arrayOfHourlyCookies = [];
  locationNames.push(this);
}
//cookieStand.prototype
