let flag;

export async function getCountry() {
  let url = 'https://restcountries.com/v3.1/all';
  const response = await fetch(url);
  const data = await response.json();

  flag = data;
  console.log(flag);
}
