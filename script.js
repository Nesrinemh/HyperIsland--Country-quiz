'use strict';

let url = 'https://restcountries.com/v3.1/all';

async function getData() {
  const response = await fetch(url);
  const movies = await response.json();
  console.log(movies);
}
