'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let cookieTable = document.getElementById('cookie-table')

// grabbing onto an html element, filling it with data, then appending that element to its parent
var resultsElement = document.getElementById('sales');

function printResultsAsLi() {
  for (var j = 0; j < storesArr.length; j++) {
    var ulElement = document.createElement('ul');
    cookieTable.appendChild(ulElement);

    var liElement = document.createElement('li');
    liElement.textContent = storesArr[j].name;
    ulElement.appendChild(liElement);

    for (var i = 0; i < storesArr[j].cookiesSoldPerHourArray.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${storesArr[j].cookiesSoldPerHourArray[i]} cookies`;
      ulElement.appendChild(liElement);
    }
    var liElement = document.createElement('li');
    liElement.textContent = `Total: ${storesArr[j].dailyStoreTotal} cookies`;
    ulElement.appendChild(liElement);
  }
}
let locationNames = [];

//constructor Function:
function cookieStand(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.openHours = hours;
  this.dailyStoreTotal = 0;
  this.cookiesSoldPerHourArray = [];
  locationNames.push(this);
}

cookieStand.prototype.calcCookiesSoldPerHour = function () {

  for (let i = 0; i < hours.length; i++) {
    let hourlyCookieSale = Math.floor(this.avgCookies * (Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
    this.cookiesSoldPerHourArray.push(hourlyCookieSale);
    this.dailyStoreTotal = this.dailyStoreTotal + hourlyCookieSale;
    // console.log(this.dailyStoreTotal);
  }
}

let seattle = new cookieStand('Seattle', 23, 65, 6.3);
seattle.calcCookiesSoldPerHour();
let tokyo = new cookieStand('Tokyo', 3, 24, 1.2);
tokyo.calcCookiesSoldPerHour();
let dubai = new cookieStand('Dubai', 11, 38, 3.7);
dubai.calcCookiesSoldPerHour();
let paris = new cookieStand('Paris', 20, 38, 2.3);
paris.calcCookiesSoldPerHour();
let lima = new cookieStand('Lima', 2, 16, 4.6);
lima.calcCookiesSoldPerHour();
console.log(seattle);


let storesArr = [seattle, tokyo, dubai, paris, lima];
// printResultsAsLi();

let renderHeaderRow = function () {
  let trElem = document.createElement('tr');
  let thElem = document.createElement('th');
  thElem.textContent = 'Location';
  trElem.appendChild(thElem);
  for (var i = 0; i < hours.length; i++) {
    let thElement = document.createElement('th');
    thElement.textContent = hours[i];
    trElem.appendChild(thElement);
  }
  let thElement = document.createElement('th');
  thElement.textContent = 'Totals';
  trElem.appendChild(thElement);
  cookieTable.appendChild(trElem);
}

renderHeaderRow();

let renderTable = function () {
  for (let i = 0; i < storesArr.length; i++) {
    let trElem = document.createElement('tr');
    let thElem = document.createElement('th');
    thElem.textContent = storesArr[i].name;
    trElem.appendChild(thElem);
    for (var j = 0; j < hours.length; j++) {
      let tdElement = document.createElement('td');
      tdElement.textContent = storesArr[i].cookiesSoldPerHourArray[j];
      trElem.appendChild(tdElement);
    }
    let thElement = document.createElement('th');
    thElement.textContent = storesArr[i].dailyStoreTotal;
    trElem.appendChild(thElement);
    cookieTable.appendChild(trElem);
  }
}
renderTable();


let renderFooterRow = function () {
  let trElem = document.createElement('tr');
  let thElem = document.createElement('th');
  thElem.textContent = 'Totals';
  trElem.appendChild(thElem);
  let dayTotalOfTotals = 0;
  for (let i = 0; i < hours.length; i++) {
    let thElement = document.createElement('th');
    let allLocTotalHourly = 0;

    for (let j = 0; j < storesArr.length; j++) {
      allLocTotalHourly += storesArr[j].cookiesSoldPerHourArray[i];
    }
    thElement.textContent = allLocTotalHourly;
    dayTotalOfTotals += allLocTotalHourly;

    console.log(allLocTotalHourly);
    trElem.appendChild(thElement);
  }
  let thElement = document.createElement('th');
  thElement.textContent = dayTotalOfTotals;
  trElem.appendChild(thElement);
  cookieTable.appendChild(trElem);
}

renderFooterRow();


