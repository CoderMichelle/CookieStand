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
  storesArr.push(this);
  this.calcCookiesSoldPerHour();
  this.renderTable();
}

CookieStand.prototype.calcCustPerHour = function () {

  let custPerHour = ((Math.random()) * (this.maxCust - this.minCust)) + this.minCust;
  return custPerHour;
};

CookieStand.prototype.calcCookiesSoldPerHour = function () {

  for (let i = 0; i < hours.length; i++) {
    let hourlyCookieSale = Math.ceil(this.avgCookies * this.calcCustPerHour());
    this.cookiesSoldPerHourArray.push(hourlyCookieSale);
    this.dailyStoreTotal = this.dailyStoreTotal + hourlyCookieSale;
  }
};

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
};

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
};

renderHeaderRow();

//instantiations - OBJECTS ARE CREATED WITH CONSTRUCTOR
new CookieStand('Seattle', 23, 65, 6.3);
new CookieStand('Tokyo', 3, 24, 1.2);
new CookieStand('Dubai', 11, 38, 3.7);
new CookieStand('Paris', 20, 38, 2.3);
new CookieStand('Lima', 2, 16, 4.6);
console.log(storesArr);

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
    trElem.appendChild(thElement);
    tfootElem.appendChild(trElem);
  }
  let thElement = document.createElement('th');
  thElement.textContent = dayTotalOfTotals;
  trElem.appendChild(thElement);
  tfootElem.appendChild(trElem);
  cookieTable.appendChild(tfootElem);
};

renderFooterRow();

var formElement = document.getElementById('newStoreInputForm');

function handleSubmit(event) {
  event.preventDefault();
  var name = event.target.newStoreLocation.value;
  var minCust = +event.target.minCust.value;
  var maxCust = +event.target.maxCust.value;
  var avgCookies = +event.target.avgCookies.value;
  new CookieStand(name, minCust, maxCust, avgCookies);
  console.log(storesArr);
  var removeEl = document.getElementsByTagName('tfoot')[0];
  removeEl.removeChild(removeEl.firstChild);
  renderFooterRow();
}
formElement.addEventListener('submit', handleSubmit);

