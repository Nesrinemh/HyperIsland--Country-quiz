import { getCountry } from './country.js';

let flag;

async function getData() {
  let url = 'https://restcountries.com/v3.1/all';
  const response = await fetch(url);
  const data = await response.json();

  flag = data[13].flag;
  console.log(flag);
}

getData();
getCountry();
