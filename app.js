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