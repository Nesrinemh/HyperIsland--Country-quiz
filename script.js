'use strict';

async function getData() {
  let url = 'https://restcountries.com/v3.1/all';
  const response = await fetch(url);
  const movies = await response.json();
  console.log(movies);
}

getData();
