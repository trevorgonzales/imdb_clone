import GetRandomNumber from '../utilities/GetRandomNumber';

export default async function fetch_popular_movies(
  endpoint,
  state_set_callback
) {
  const response = await fetch(endpoint);
  const data = await response.json();
  const max_number = data.results.length - 1;
  const rnd = Math.floor(Math.random() * GetRandomNumber(max_number));
  state_set_callback(data.results.splice(rnd, 3));
}