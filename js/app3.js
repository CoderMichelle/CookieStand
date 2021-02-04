'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let storesArr = [];

// grabbing onto an html element, filling it with data, then appending that element to its parent
// let resultsElement = document.getElementById('sales');
let cookieTable = document.getElementById('cookie-table')

function printResultsAsLi() {
  for (let j = 0; j < storesArr.length; j++) {
    let ulElement = document.createElement('ul');
    cookieTable.appendChild(ulElement);

    let liElement = document.createElement('li');
    liElement.textContent = storesArr[j].name;
    ulElement.appendChild(liElement);

    for (let i = 0; i < storesArr[j].cookiesSoldPerHourArray.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${storesArr[j].cookiesSoldPerHourArray[i]} cookies`;
      ulElement.appendChild(liElement);
    }
    liElement = document.createElement('li');
    liElement.textContent = `Total: ${storesArr[j].dailyStoreTotal} cookies`;
    ulElement.appendChild(liElement);
  }
}
// let locationNames = [];

//constructor Function:
function CookieStand(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.openHours = hours;
  this.dailyStoreTotal = 0;
  this.cookiesSoldPerHourArray = [];
  // locationNames.push(this);
  storesArr.push(this);
}

CookieStand.prototype.calcCustPerHour = function () {

  let custPerHour = Math.floor((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
  return custPerHour;
  console.log('here is a consolelog');
}

CookieStand.prototype.calcCookiesSoldPerHour = function () {

  for (let i = 0; i < hours.length; i++) {
    let hourlyCookieSale = Math.ceil(this.avgCookies * this.calcCustPerHour());
    console.log(this.maxCust);
    this.cookiesSoldPerHourArray.push(hourlyCookieSale);
    this.dailyStoreTotal = this.dailyStoreTotal + hourlyCookieSale;
  }
}
//above came from math.random

let tbodyElem = document.createElement('tbody');
cookieTable.appendChild(tbodyElem);

CookieStand.prototype.renderTable = function () {

  let trElem = document.createElement('tr');
  let thElem = document.createElement('th');
  thElem.textContent = this.name;
  trElem.appendChild(thElem);
  tbodyElem.appendChild(trElem);
  for (var j = 0; j < hours.length; j++) {
    let tdElement = document.createElement('td');
    tdElement.textContent = this.cookiesSoldPerHourArray[j];
    trElem.appendChild(tdElement);
    tbodyElem.appendChild(trElem);
  }
  let thElement = document.createElement('th');
  thElement.textContent = this.dailyStoreTotal;
  trElem.appendChild(thElement);
  tbodyElem.appendChild(trElem);
  cookieTable.appendChild(tbodyElem);
}

//instantiations - OBJECTS ARE CREATED WITH CONSTRUCTOR
let seattle = new CookieStand('Seattle', 23, 65, 6.3);
seattle.calcCookiesSoldPerHour();
seattle.renderTable();
let tokyo = new CookieStand('Tokyo', 3, 24, 1.2);
tokyo.calcCookiesSoldPerHour();
tokyo.renderTable();
let dubai = new CookieStand('Dubai', 11, 38, 3.7);
dubai.calcCookiesSoldPerHour();
dubai.renderTable();
let paris = new CookieStand('Paris', 20, 38, 2.3);
paris.calcCookiesSoldPerHour();
paris.renderTable();
let lima = new CookieStand('Lima', 2, 16, 4.6);
lima.calcCookiesSoldPerHour();
lima.renderTable();
console.log(seattle);

// let storesArr = [seattle, tokyo, dubai, paris, lima];
// printResultsAsLi();
let theadElem = document.createElement('thead');
cookieTable.appendChild(theadElem);

let renderHeaderRow = function () {
  let trElem = document.createElement('tr');
  let thElem = document.createElement('th');
  thElem.textContent = 'Location';
  trElem.appendChild(thElem);
  theadElem.appendChild(trElem);
  for (var i = 0; i < hours.length; i++) {
    let thElement = document.createElement('th');
    thElement.textContent = hours[i];
    trElem.appendChild(thElement);
    theadElem.appendChild(trElem);
  }
  let thElement = document.createElement('th');
  thElement.textContent = 'Totals';
  trElem.appendChild(thElement);
  theadElem.appendChild(trElem);
  cookieTable.appendChild(theadElem);
}

renderHeaderRow();

let tfootElem = document.createElement('tfoot');
cookieTable.appendChild(tfootElem);

let renderFooterRow = function () {
  let trElem = document.createElement('tr');
  let thElem = document.createElement('th');
  thElem.textContent = 'Totals';
  trElem.appendChild(thElem);
  tfootElem.appendChild(trElem);
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
    tfootElem.appendChild(trElem);
  }
  let thElement = document.createElement('th');
  thElement.textContent = dayTotalOfTotals;
  trElem.appendChild(thElement);
  tfootElem.appendChild(trElem);
  cookieTable.appendChild(tfootElem);
}

renderFooterRow();


